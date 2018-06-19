const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router.post("/", notesController.saveNote);

router.delete("/:noteId/:articleId", notesController.deleteNote);

module.exports = router;