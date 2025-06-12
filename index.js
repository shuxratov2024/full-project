const express = require("express")

const { connectDB } = require("./src/config/db.js");
const router = require("./src/routes/NoteRouter.js");

const app = express();
app.use(express.json())

app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req DB_URL is ${req.url}`)
    next()
})


app.use("/api/notes", router)

connectDB()

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
})