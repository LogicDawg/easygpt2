// import express from "express";
// import cors from "cors";
// import generate from "./generate.js";
const generate = require("./generate.js")
const cors = require("cors")
const express = require("express")
const ExpressError = require("./expressError.js")
const app = express();

app.use(express.json());
app.use(cors());

const uRoutes = require("./routes/users");
app.use("/users",uRoutes);

app.use(function (req,res,next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

app.use(function (err,req,res,next){
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message:err.message,
            status: status
        }
    });
})

const port = process.env.PORT || 3005;

app.get("/", (req,res) => {
    res.send("hello world from our API")
})

app.post("/generate", async (req,res) => {
    const queryDescription = req.body.queryDescription
    try {
        const sqlQuery = await generate(queryDescription)
        res.json({response: sqlQuery})
    } catch(error) {
        console.error(error)
        res.status(500).send("Internal SErver Error")
    }

})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})