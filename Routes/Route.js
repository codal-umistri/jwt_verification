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
  validateDeleteNoteInput,
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

/**
 * @swagger
 * /api/v1/getnotes:
 *   get:
 *     summary: Get user's notes
 *     description: Retrieve all notes of the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                      type: object
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.get("/getnotes", auth, getnotes);

/**
 * @swagger
 * /api/v1/getallnotes:
 *   get:
 *     summary: Get all notes
 *     description: Retrieve all notes of all users.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                      type: object
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.get("/getallnotes", auth, getallnotes);

/**
 * @swagger
 * /api/v1/registration:
 *   post:
 *     summary: User registration
 *     description: Register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *               - confirm_password
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '409':
 *         description: User already exists
 *       '500':
 *         description: Internal server error
 */
router.post("/registration", validateInput, Registration);
/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: User login
 *     description: Authenticate and log in a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 TOKEN:
 *                   type: string
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '401':
 *         description: Unauthorized, invalid credentials
 *       '500':
 *         description: Internal server error
 */
router.post("/login", validateLoginInputs, Login);

/**
 * @swagger
 * /api/v1/addnotes:
 *   post:
 *     summary: Add a new note
 *     description: Add a new note for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - title
 *               - description
 *     responses:
 *       '200':
 *         description: Note added successfully
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '500':
 *         description: Internal server error
 */
router.post("/addnotes", auth, validateNoteInput, addnotes);

/**
 * @swagger
 * /api/v1/updatenote:
 *   put:
 *     summary: Update a note
 *     description: Update a note for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - title
 *               - description
 *     responses:
 *       '200':
 *         description: Note updated successfully
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '404':
 *         description: Note not found
 *       '500':
 *         description: Internal server error
 */
router.put("/updatenote", auth, validateNoteInput, updatenotes);

/**
 * @swagger
 * /api/v1/deleteaccount:
 *   delete:
 *     summary: Delete user account
 *     description: Delete the account of the authenticated user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *             required:
 *               - email
 *     responses:
 *       '200':
 *         description: Account deleted successfully
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/deleteaccount", checkInputs, deleteuser);

/**
 * @swagger
 * /api/v1/deletenote:
 *   delete:
 *     summary: Delete a note
 *     description: Delete a note for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *             required:
 *               - title
 *     responses:
 *       '200':
 *         description: Note deleted successfully
 *       '400':
 *         description: Bad request, missing or invalid data
 *       '404':
 *         description: Note not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/deletenote", auth, validateDeleteNoteInput, deletenotes);

module.exports = router;
