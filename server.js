//const express = require("express");
import express from "express";
const app = express();

app.get("/greet",(req,res) => {
   const {name} = req.query;
   res.send({msg: `Welcome,hi ${name}!`})
})

//module.exports = app;
export default app;