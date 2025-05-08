// console.log("satyam athya",2+2);

require("dotenv").config()


const express= require("express")
const app= express()
// const port=4000
const port=process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("hello world")
})


app.get('/user',(req,res)=>{
    // res.send("satyam athya",'/n',24,"damoh")

// res.send('<h1>hey this is me Satyam</h1>')


res.json({name:"satyam",age:24,birthPlace:"damoh"})


})



// app.listen(process.env.PORT,()=>{
//     console.log(`example app listening on port ${port}`);
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
    
}) 