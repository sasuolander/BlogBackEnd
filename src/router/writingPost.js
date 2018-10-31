const express = require('express');
const router = express.Router();

    router.get('',(reg,res)=>{
        res.send("test");

    console.log("test");
    });
    router.post('',(reg,res)=>{
    console.log("test");
   
    });
    router.put('',(reg,res)=>{
        console.log("test");
    });
    router.delete('',(reg,res)=>{
        console.log("test");
    });

module.exports= router;