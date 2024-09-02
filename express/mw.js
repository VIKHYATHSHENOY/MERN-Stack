const express=require("express")
const app=express()

app.use((req,res,next)=>{
    console.log("welcome to my middleware demo")
    next()
})

const m1= function(req,res,next){
    console.log("request came at:",Date.now())
    next()
}
const m2=function(req,res,next){
    console.log("response sent at:",Date.now())
    next()
}

app.use("/hello",m1)

app.get("/hello",(req,res,next)=>{
    res.send("Message")
    next()
})

app.get("/hello/hellov",(req,res,next)=>{
    res.send("Messagev")
    next()
})

app.use("/hello",m2)




app.listen(3000,()=>{
    console.log("server got started")
})




