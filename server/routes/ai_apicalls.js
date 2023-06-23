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
        console.log(username)
        User.addToRequests(username,queryDescription,sqlQuery)
        }
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

});

router.post("/generateimage", async (req,res) => {
    const imageDescription = req.body.imageDescription
    try {
        const imageCreate = await generateImage(imageDescription)
        res.json({response: imageCreate})
        
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }
});


router.post("/generateessay", async (req,res) => {
    const {essayDescription,numWords} = req.body
    try {
        const essayQuery = await generateessaay(essayDescription,numWords)
        res.json({response: essayQuery})
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

});

module.exports=router;