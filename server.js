import express from "express";
import dotenv from 'dotenv';

dotenv.config();
 const app=express();
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
 app.get('/',(req,res)=>{
    res.send("Home page");
 })

 app.get('/about',(req,res)=>{
    res.send("about page")
 })

 app.get('/login',(req,res)=>{
    res.send("login please to access our servics");
 })
 
 app.get('/p',(req,res)=>{
    res.json({value:"parshottam chutiya he"})
 })
 app.listen(process.env.PORT||1000,()=>{
    console.log("server started");
 }); 