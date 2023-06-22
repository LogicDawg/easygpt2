const cors = require("cors")
const express = require("express")
const {ExpressError} = require("./expressError.js")
const app = express();
const {authenticateJWT} = require("./middleware/auth.js")

app.use(express.json());
app.use(authenticateJWT);
app.use(cors());

const ai_apicallsRoutes = require("./routes/ai_apicalls.js")
const userRoutes = require("./routes/users");
const authRoutes =require("./routes/auth.js");

app.use("/ai_calls",ai_apicallsRoutes)
app.use("/auth",authRoutes);
app.use("/users",userRoutes);

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

module.exports = app;

