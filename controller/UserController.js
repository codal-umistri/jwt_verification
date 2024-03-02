const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { checkUser, addUser, deleteUser } = require("../sql/querys");

exports.Registration = async (req, res) => {
  const hashedpassword = bcrypt.hashSync(req.body.password, 10);
  try {
    await checkUser(req.body.email, "USER", async (error, result) => {
      if (error)
        return res.status(500).json({ message: error.message + "abjhbsdaah" });

      return !result.length
        ? await addUser(
            req.body.name,
            req.body.email,
            hashedpassword,
            "USER",
            (error, result) => {
              if (error) res.status(500).json({ message: error.message });

              res.status(200).json({ message: "User has been registered" });
            }
          )
        : res.status(409).json({ message: "User Already Exits" });
    });
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

exports.Login = async (req, res) => {
  try {
    await checkUser(req.body.email, "USER", async (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      return result?.length &&
        (await bcrypt.compare(req.body.password, result[0].password))
        ? res.status(200).json({
            message: "Login successful",
            TOKEN: jwt.sign({ id: result[0].id }, process.env.SECRET_KEY),
          })
        : res.status(400).json({
            message: result?.length
              ? "Password didn't match"
              : "User Not Found",
          });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    await checkUser(req.body.email, "USER", async (error, result) => {
      if (error) res.status(500).json({ message: error.message });
      return result.length
        ? await deleteUser(req.body.email, "USER", (error, result) => {
            if (error) res.status(500).json({ message: error.message });

            res.status(200).json({ message: "User has been deleted" });
          })
        : res.status(404).json({ message: "User not found" });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
