const validator = require("validator");

exports.validateInput = (req, res, next) => {
  const { name, email, password, confirm_password } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !confirm_password ||
    name === "undefined" ||
    email === "undefined" ||
    password === "undefined" ||
    confirm_password === "undefined"
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  next();
};

exports.validatelogininputs = (req, res, next) => {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    email === "undefined" ||
    password === "undefined"
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  next();
};

exports.validateemail = (req, res, next) => {
  const { email } = req.body;

  if (!email || email === "undefined") {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  next();
};
