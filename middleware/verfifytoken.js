const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req?.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorizres User" });
    }
    req.userid = jwt.verify(token, process.env.SECRET_KEY).id;
    next();
  } catch (error) {
    return res.status(401).json({ message: " Unauthorizred User" });
  }
};

module.exports = auth;
