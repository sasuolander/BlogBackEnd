const express = require('express');
const router = express.Router();

    router.get('',(reg,res)=>{
        res.send("test");
    console.log("posting");
    });
    router.post('',(reg,res)=>{
    console.log("test");
    res.send("posting");
    });
    router.put('',(reg,res)=>{
        console.log("test");
        res.send("posting");
    });
    router.delete('',(reg,res)=>{
        console.log("test");
        res.send("posting");
    });

module.exports= router;