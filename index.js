import express from "express"
import mongoose from "mongoose"
import ToDo from "./Route.js"
import cors from "cors"

const app = express()
const PORT = 5056
app.use(cors())
app.use(express.json())

app.use("/api",ToDo)


app.get("/get",(req,res)=>{
    res.send("Hi this is siddharth")
})


app.listen(PORT,()=>{
    console.log(`Server running successfully on ${PORT} `)
})


mongoose.connect("mongodb+srv://boorgusiddharth:siddharthjuly99@siddharth.fiuilki.mongodb.net/?retryWrites=true&w=majority&appName=Siddharth")
.then(()=>console.log("DB Connected Succesfully"))