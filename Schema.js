import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    ToDo:{type:String}
})


const toDoSchema = mongoose.model("NewToDo",productSchema)
export default toDoSchema