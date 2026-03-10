const registerSchema = require("../utils/validator");

const validate = (req, res, next) => {
  try {
    registerSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.issues,
    });
  }
};

module.exports = validate;
