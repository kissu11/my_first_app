import express from "express";
import dotenv from 'dotenv';

dotenv.config();
 const app=express();
 app.get('/',(req,res)=>{
    res.send("Home page");
 })

 app.get('/about',(req,res)=>{
    res.send("about page")
 })

 app.get('/login',(req,res)=>{
    res.send("login please to access our servics");
 })

 app.listen(process.env.PORT||1000,()=>{
    console.log("server started");
 }); 