const express = require("express");
const {
  Registration,
  Login,
  deleteuser,
} = require("../controller/UserController");
const {
  validateInput,
  validatelogininputs,
  validateemail,
} = require("../validations/Validator");
const {
  getnotes,
  addnotes,
  deletenotes,
  getallnotes,
  updatenotes,
} = require("../controller/NoteController");
const auth = require("../middleware/verfifytoken");

const router = express.Router();

router.post("/registration", validateInput, Registration);
router.post("/login", validatelogininputs, Login);
router.delete("/deleteaccount", validateemail, deleteuser);
router.post("/addnotes", auth, addnotes);
router.get("/getnotes", auth, getnotes);
router.get("/getallnotes", auth, getallnotes);
router.put("/updatenote", auth, updatenotes);
router.delete("/deletenote", auth, deletenotes);

module.exports = router;
