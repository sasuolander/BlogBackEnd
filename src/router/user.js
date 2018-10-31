const express = require('express');
const router = express.Router();

router.get('',(reg,res)=>{
    console.log("user");
    res.send("user");
});
router.post('',(reg,res)=>{
    console.log("test");
    res.send("user");
});
router.put('',(reg,res)=>{
    console.log("test");
    res.send("user");
});
router.delete('',(reg,res)=>{
    console.log("test");
    res.send("user");
});

module.exports= router;