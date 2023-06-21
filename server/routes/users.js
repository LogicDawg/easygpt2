const db = require("../db")
const express = require("express");
const router = express.Router();

router.get('/', async (req,res) => {
    const results = await db.query(`SELECT * FROM users`);
    

    return res.json(results.rows);
})

module.exports = router;