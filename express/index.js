const express=require("express")
console.log(typeof express)

const app=express()
app.listen(8000,()=>{
    console.log("server got started")
})


app.get("/",(req,res)=>{
    res.send("Hello from the express server")
}
)