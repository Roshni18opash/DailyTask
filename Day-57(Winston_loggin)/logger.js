const { createLogger, format, transports, level } = require("winston");
//create logger,make format then save in app.js
const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(({timestamp,level,message,stack}) => {
      return `${timestamp} - [${level}]: ${stack || message}`;
    }),
  ),
  transports: [
    //msg and level ne ly ne logger ne apse logger formate krse then app log ma store krse
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple())
    }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log",
      format: format.combine(
        format.timestamp(),
        format.json())
     }),
  ],
});
//logger through je msg pass krsu app.js file bnse ae msg upr na formatt mujb store thse
module.exports = logger;
