import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    ToDo:{type:String},
    PhoneNumber:{type:Number}
})


const toDoSchema = mongoose.model("NewToDo",productSchema)
export default toDoSchema