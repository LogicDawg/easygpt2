const express = require("express");
const router = new express.Router();
const generatesql = require("../ai/generatesql")

router.post("/generatesql", async (req,res) => {
    const queryDescription = req.body.queryDescription
    try {
        const sqlQuery = await generatesql(queryDescription)
        res.json({response: sqlQuery})
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

})

module.exports=router;