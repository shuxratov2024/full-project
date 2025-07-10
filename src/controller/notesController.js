const Note = require("../models/note");


async function GetAll(req,res) {
    try {
        const note = await Note.find()
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}



async function getOne(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) {
            res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json(note);
    } catch (error) {
        console.log("Error fetching note", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are requird" })
        }
        const newNote = new Note({ title, content })
        await newNote.save()
        res.status(201).json({ message: "Note created successfully" });
    } catch (error) {
        console.log("Error creating note", error);

    }
}

async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const UpdatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true,
            runValidators: true
        })
        if (!UpdatedNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json(UpdatedNote)

    } catch (error) {
        res.status(500).json({ message: "Internal Server c" })

    }
}

async function deleteNote(req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id,)
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    getOne,
    createNote,
    updateNote,
    deleteNote,
    GetAll
}