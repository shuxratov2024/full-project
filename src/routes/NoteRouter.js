const express = require("express");
const { getOne, createNote, updateNote, deleteNote, GetAll,} = require("../controller/notesController");
const router = express.Router()


router.get("/get/:id",getOne)
router.get("/get-all",GetAll)
router.post("/create",createNote)
router.put("/update/:id",updateNote)
router.delete("/delete/:id",deleteNote)



module.exports = router;