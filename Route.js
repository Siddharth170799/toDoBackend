import express from "express"
import toDoSchema from "./Schema.js"


const ToDo = express.Router()

ToDo.post("/postToDO",async(req,res)=>{

const {toDo,phoneNumber} = req.body

const details = new toDoSchema({
    ToDo:toDo,
    PhoneNumber:phoneNumber

})
const details1 = await details.save()
res.send({message:"details posted successfully",status:200})

})


ToDo.get("/getToDO",async(req,res)=>{
   
    const phoneNumber2 = req.query.phoneNumber
    
    const details = await toDoSchema.find({PhoneNumber:phoneNumber2})

    res.send(details)
})


ToDo.delete("/deleteToDO/:id",async(req,res)=>{
    const {id} = req.params

    const details  = await toDoSchema.findByIdAndDelete(id)
  
    res.send({message:"deleted successfuly"})
})

ToDo.put("/updateToDO/:id",async(req,res)=>{
    const {id} = req.params
    const {updatedToDo} = req.body

    const details = await toDoSchema.findByIdAndUpdate(id,{ToDo:updatedToDo})
    res.send({message:"ToDos updated successfully"})
})

export default ToDo