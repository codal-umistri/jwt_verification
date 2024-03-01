const express = require("express");
const {
  Registration,
  Login,
  deleteuser,
} = require("../controller/UserController");
const {
  validateInput,
  validateLoginInputs,
  checkInputs,
  validateNoteInput,
  validateDeleteNoteInput
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

router.get("/getnotes", auth, getnotes);
router.get("/getallnotes", auth, getallnotes);
router.post("/registration", validateInput, Registration);
router.post("/login", validateLoginInputs, Login);
router.post("/addnotes", auth, validateNoteInput, addnotes);
router.put("/updatenote", auth, validateNoteInput, updatenotes);
router.delete("/deleteaccount", checkInputs, deleteuser);
router.delete("/deletenote", auth,validateDeleteNoteInput,deletenotes);

module.exports = router;
