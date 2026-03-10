const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// verify the transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Error configuring email transporter:", error);
  } else {
    console.log("Email transporter configured successfully");
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });

    console.log("Message sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
async function sendRegistrationEmail(userEmail, name) {
  const subject = "Welcome to Our Service!";
  const text = `Hi ${name},\n\nThank you for registering with our service! We're excited to have you on board.\n\nBest regards,\nThe Team`;
  const html = `<p>Hi ${name},</p><p>Thank you for registering with our service! We're excited to have you on board.</p><p>Best regards,<br>The Team</p>`;
  await sendEmail(userEmail, subject, text, html);
}

module.exports = { sendRegistrationEmail };
