const express=require('express');
const app=express()

const bollywood=require('./Routes/Bollywood')
const hollywood=require('./Routes/Hollywood')
const tech=require('./Routes/Technology')
const food=require('./Routes/Food')
const fitness=require('./Routes/Fitness')
const PORT= 6060;
const cors=require('cors')


 app.use(cors({origin:"*"}))
 app.use("/",bollywood)
 app.use('/',hollywood)
 app.use('./',tech)
 app.use('./', food)
 app.use('./',fitness)











app.listen(PORT,()=>{
    console.log("Server is running on 6060")
 })