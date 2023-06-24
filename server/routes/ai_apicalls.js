const express = require("express");
const router = new express.Router();
const User = require("../models/users")
const {ExpressError} = require("../expressError")
const generatesql = require("../ai/generatesql")
const generateImage = require("../ai/generateimage");
const generateessaay = require("../ai/generateessay");

router.post("/generatesql", async (req,res) => {
    const {username,queryDescription} = req.body
    try {
        const sqlQuery = await generatesql(queryDescription)
        if(res){
        res.json({response: sqlQuery})
        User.addToRequests(username,queryDescription,sqlQuery)
        }
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

});

router.post("/generateimage", async (req,res) => {
    const {username,imageDescription} = req.body
    try {
        const imageCreate = await generateImage(imageDescription)
        if(res){
        res.json({response: imageCreate})
        User.addToRequests(username,imageDescription,imageCreate)
        
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }
});


router.post("/generateessay", async (req,res) => {
    const {username,essayDescription,numWords} = req.body
    try {
        const essayQuery = await generateessaay(essayDescription,numWords)
        if(res){
        res.json({response: essayQuery})
        User.addToRequests(username,essayDescription,essayQuery)
        }
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

});

module.exports=router;