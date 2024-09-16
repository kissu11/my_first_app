import express from "express";
import dotenv from 'dotenv';

dotenv.config();
 const app=express();

 app.get('/api/',(req,res)=>{
    res.send("Home page");
 })

 app.get('/api/about',(req,res)=>{
    res.send("about page")
 })

 app.get('/api/login',(req,res)=>{
    res.send("login please to access our servics");
 })
 
 app.get('/api/p',(req,res)=>{
    
    res.json({value:"parshottam chutiya he"})
 })
 app.listen(process.env.PORT||1000,()=>{
    console.log("server started");
 }); 