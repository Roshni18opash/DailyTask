const passportSch = require("../models/passport.schema");
const mailer = require("nodemailer");         //node mailer

// "/" page
const index = async (req, res) => {
  await res.render("index", { user: req.user });
}
// dashboard
const index2 = async (req, res) => {
  await res.render("index2", { user: req.user });
}

// signup
const signup = async (req, res) => {

  try {
    await passportSch.create(req.body);
    return res.redirect("/login");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};


const signupPage = async (req, res) => {
  await res.render("signup");
}

// login
const login = async (req, res) => {
  // await res.render("login");
  const { username, password } = req.body;
  let user = await passportSch.findOne({ username: username });

  if (user) {
    if (user.password === password) {
      res.send("login");
      return res.cookie("user", "User.username").redirect("/");
    } else {
      console.log("Password Invalid");
    }
  } else {
    console.log("Invalid Username");
    return res.redirect("/login");
  }
}

const loginPage = async (req, res) => {
  const error = req.session.error;
  const message = req.session.message;
  delete req.session.error;
  delete req.session.message;
  await res.render("login", { error, message });
}

// local  - direct router thi redirect karavyu so ahiyathi kadhi nakhyu local
// const local = (req, res) => {
//   res.send("login..")
// }

// logout
const logout = (req, res) => {
  req.logout((error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return res.redirect("/login");
    }
  })
}

// profile - logout karine back krye to without login home page pr nai jai ena mate
// const profile = (req, res) => {      //profile controller
//   res.send(req.user);
// }

// form basic
const formBasic = (req, res) => {
  return res.render("form-basic", { user: req.user });
}

// tables
const table = async (req, res) => {
  try {
    let data = await passportSch.find();
    return res.render("tables", { data, user: req.user });
  } catch (error) {
    console.log(error);
    return false;
  }
}

// userni profile jova - signup page na
const profile = (req, res) => {
  let user = req.user;
  // console.log(user);
  return res.render("profile", { user });
}

// password Change
const changePassword = (req, res) => {
  return res.render("changepassword", { user: req.user });
}

const changePasswordPage = async (req, res) => {
  const { oldpassword, newpassword, confirmpassword } = req.body;
  let { id } = req.user;
  // console.log(id);
  let data = await passportSch.findById(id);
  console.log(data);
  if (data.password === oldpassword) {
    if (newpassword === confirmpassword) {
      await passportSch.findByIdAndUpdate(id, { password: newpassword });
      console.log("Password Change Successfully....");
      return res.redirect("/login")
    } else {
      console.log("New Password n Confirm Password Dosen't Match..");
      return res.redirect("/changepassword");
    }
  } else {
    console.log("Old Password is Wrong..");
    return res.redirect("/changepassword");
  }
}

// forgetpassword reset through otp

// forgetpassword reset through otp

const forgetPassword = async (req, res) => {
  try {
    // ૧. યુઝર જે ઈમેઈલ એન્ટર કરે તે અહીં રિક્વેસ્ટમાંથી મળે છે
    const { email } = req.body;
    console.log("Password reset requested for:", email);
    
    // ૨. ડેટાબેઝમાં ચેક કરે છે કે આ ઈમેઈલ વાળો કોઈ યુઝર છે કે નહીં
    let user = await passportSch.findOne({ email: email });

    if (!user) {
      console.log("Email not found in database:", email);
      req.session.error = "No account found with this email address!";
      return res.redirect("/login");
    }

    // ૩. પાસવર્ડ બદલવા માટે ૬-આંકડાનો યુનિક OTP (રેન્ડમ નંબર) જનરેટ કરે છે
    let otp = Math.floor(100000 + Math.random() * 900000);

    // ૪. ડેટાબેઝમાં જે-તે યુઝરના રેકોર્ડમાં આ OTP સેવ કરે છે અને સેશનમાં ઈમેઈલ સાચવે છે
    await passportSch.findByIdAndUpdate(user.id, { otp: otp });
    req.session.resetEmail = email;

    // ૫. Nodemailer ટ્રાન્સપોર્ટર સેટઅપ કરે છે (જીમેઈલ સર્વર સાથે કનેક્ટ કરવા માટે)
    const transporter = mailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL/TLS નો ઉપયોગ કરવા માટે
      auth: {
        user: "roshnijp16@gmail.com",
        pass: "wwmz kemd xwid kdrs",
      }
    });

    // ૬. ઈમેઈલનું કન્ટેન્ટ તૈયાર કરે છે (કોને મોકલવો, સબ્જેક્ટ શું રાખવો અને OTP શું છે)
    const createMail = {
      from: "Matrix Admin <roshnijp16@gmail.com>",
      to: email,
      subject: "Your OTP for Password Reset",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4a90e2;">Welcome to Matrix Admin</h2>
          <p>You requested a password reset. Use the OTP below to proceed:</p>
          <div style="background: #f4f7f6; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 5px;">
            ${otp}
          </div>
          <p>This code will expire shortly. If you did not request this, please ignore this email.</p>
        </div>
      `
    }

    console.log("Attempting to send email to:", email);
    
    // ૭. ખરેખર ઈમેઈલ મોકલવાની પ્રક્રિયા અહીં થાય છે
    transporter.sendMail(createMail, (error, info) => {
      if (error) {
        // જો ઈમેઈલ મોકલવામાં ભૂલ આવે તો અહીં એરર મેસેજ દેખાશે
        console.error("CRITICAL MAILER ERROR:", error);
        return res.status(500).send(`Error sending email: ${error.message}`);
      } else {
        // ઈમેઈલ સફળતાપુર્વક જતો રહે ત્યારે ટર્મિનલમાં મેસેજ આવશે અને OTP વેરિફાઈ પેજ ખુલશે
        console.log("EMAIL SENT SUCCESSFULLY!");
        console.log("Response from server:", info.response);
        return res.render("otp-verify"); // OTP એન્ટર કરવાનું પેજ બતાવે છે
      }
    });

  } catch (error) {
    console.error("Forget Password Error:", error);
    res.status(500).send("Internal Server Error: " + error.message);
  }
}

// otp verification
const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const email = req.session.resetEmail;

    if (!email) return res.redirect("/login");

    let user = await passportSch.findOne({ email: email });

    if (user && user.otp == otp) {
      // Clear OTP after successful verify
      await passportSch.findByIdAndUpdate(user.id, { otp: null });
      req.session.otpVerified = true; // Set flag to allow password change
      return res.redirect("/reset-password");
    } else {
      return res.send("<div style='background: #0b0f1a; color: #ef4444; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif;'><h1>Error: Correct OTP Required!</h1></div>");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Error");
  }
}

// Reset password page
const resetPasswordPage = (req, res) => {
  if (!req.session.otpVerified) return res.redirect("/login");
  res.render("reset-password");
}

// Update password logic after recovery
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const email = req.session.resetEmail;

    if (!req.session.otpVerified || !email) return res.redirect("/login");

    await passportSch.findOneAndUpdate({ email: email }, { password: password });

    // Cleanup session
    delete req.session.resetEmail;
    delete req.session.otpVerified;

    res.render("login", { message: "Password updated successfully. Please login." });
  } catch (error) {
    console.log(error);
    res.send("Internal server error during password reset.");
  }
}

module.exports = {
  index, index2,
  signupPage, signup, login, loginPage, logout,
  formBasic, table, profile,
  changePassword, changePasswordPage, forgetPassword, verifyOtp, resetPasswordPage, resetPassword
}