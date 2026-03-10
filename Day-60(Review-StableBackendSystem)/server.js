const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
//google cloud
// 6089236258-j8g4urnm6s3399b8mcblvnr4gci6te99.apps.googleusercontent.com
