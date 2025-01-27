import express from "express"
import mongoose from "mongoose"

const app = express();

const port = 5000;

app.get("/",(req,res)=>{
  res.send("chal gya bhai");
})
app.listen(port, ()=>{
  console.log("server is running")
})