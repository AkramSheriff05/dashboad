const express=require('express')
const path=require('path')


const app=express()
const host=process.env.PORT||4000

const pathway=path.join(__dirname,'../public')


app.use(express.static(pathway))

app.get('',(req,res)=>{
 
   })

   
app.listen(host,()=>{
    console.log("server is up  " +host)
})