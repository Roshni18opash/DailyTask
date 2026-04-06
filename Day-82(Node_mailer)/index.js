const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const ejs = require("ejs");
// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// route to show form
app.get("/", (req, res) => {
  res.render("index");
});

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;
  //console.log(req.body);
  const template = fs.readFileSync("./views/email.ejs", "utf8");
  const html = ejs.render(template, {
    email: to,
    subject: subject,
    message: text,
  });
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "roshnijp16@gmail.com", //  sender email
        pass: "wwmzkemdxwidkdrs", // app pw
      },
    });

    let mailOptions = {
      from: '"Roshni" <roshnijp16@gmail.com>',
      to: to,
      subject: subject,
      html: html,
      attachments: [
        {
          filename: "data.pdf",
          path: path.join(__dirname, "files", "data.pdf"),
        },
        {
          filename: "image.jpg",
          path: path.join(__dirname, "files", "image.jpg"),
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.send({ message: "Email sent successfully", mailOptions });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email !" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
