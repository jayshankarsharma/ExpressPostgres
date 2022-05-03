const express=require('express');
const app=express();
app.get('/home',(req,res)=>{
    console.log("Request:- ",req)

    console.log("Response:- ",res.json({message:"Your request has been received"}))
    
})
app.post('/home',(req,res)=>{
    console.log("Request:- ",req.body.message)
    res.json({message:"Your request has been received from post", message2:req.body.message})
    console.log("Response:- " )
    
})
app.delete('/home',(req,res)=>{

})
app.patch('/home',(req,res)=>{

})

module.exports=app;