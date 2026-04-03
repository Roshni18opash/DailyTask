import dbConnect from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Log to terminal immediately
    console.log("\n🚀 NEW LEAD RECEIVED!");
    console.log(`👤 Name: ${data.name} | 📱 Phone: ${data.phone}\n`);

    // 2. Send Email Notification (Try this first)
    let emailSent = false;
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        
        await transporter.sendMail({
          from: `"RJ Insure Website" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: `🚨 NEW LEAD: ${data.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #06b6d4; border-radius: 12px; max-width: 500px;">
              <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Consultation Request</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Interested In:</strong> ${data.selectedTypes?.length > 0 ? data.selectedTypes.join(", ") : 'General Inquiry'}</p>
              <p><strong>Message:</strong> ${data.query || 'No additional message.'}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #888;">This lead was captured from your modern insurance advisor portfolio.</p>
            </div>
          `,
        });
        emailSent = true;
      }
    } catch (e) {
      console.error("❌ Email notification failed:", e.message);
    }

    // 3. Store lead in MongoDB (Keep this second)
    let dbSaved = false;
    try {
      await dbConnect();
      await Lead.create(data);
      dbSaved = true;
    } catch (e) {
      console.error("❌ MongoDB Save failed:", e.message);
    }

    // Return success if at least email worked, or indicate partial success
    if (emailSent || dbSaved) {
      return NextResponse.json({ 
        success: true, 
        message: emailSent ? "Lead captured and email sent!" : "Lead captured (DB only).",
        dbSaved 
      }, { status: 201 });
    }

    throw new Error("Both email and database storage failed.");

  } catch (error) {
    console.error("Main API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
