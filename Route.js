import express from "express"
import toDoSchema from "./Schema.js"



const ToDo = express.Router()

ToDo.post("/postToDO",async(req,res)=>{

const {toDo} = req.body
console.log(toDo)

const details = new toDoSchema({
    ToDo:toDo

})
const details1 = await details.save()
res.send({message:"details posted successfully",status:200})

})


ToDo.get("/getToDO",async(req,res)=>{
    const details = await toDoSchema.find()
    console.log(details)
    res.send(details)
})


ToDo.delete("/deleteToDO/:id",async(req,res)=>{
    const {id} = req.params

    const details  = await toDoSchema.findByIdAndDelete(id)
    console.log(details)
    res.send({message:"deleted successfuly"})
})

ToDo.put("/updateToDO/:id",async(req,res)=>{
    const {id} = req.params
    const {updatedToDo} = req.body

    const details = await toDoSchema.findByIdAndUpdate(id,{ToDo:updatedToDo})
    res.send({message:"ToDos updated successfully"})
})

export default ToDo