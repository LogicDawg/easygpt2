const express = require("express");
const router = new express.Router();
const {ExpressError, BadRequestError} = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const {BCRYPT_WORK_FACTOR, SECRET_KEY} = require("../config");
const {ensureLoggedIn,ensureAdmin} = require("../middleware/auth")
const jwt = require("jsonwebtoken")
const jsonschema = require("jsonschema")
const newUserSchema = require("../schemas/newUser.json")



router.post ('/register', async (req,res,next)=> {
    try{
       const result= jsonschema.validate(req.body,newUserSchema);
        if(!result.valid){
            const errs = result.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const {username,password} = req.body
        if(!username || !password){
            throw new ExpressError("Username and Password required",400);
        }
        const hashedPassword = await bcrypt.hash(password,BCRYPT_WORK_FACTOR);
        const results = await db.query('INSERT INTO users (username,password) VALUES ($1,$2) RETURNING username',
        [username,hashedPassword]);
        return res.json(results.rows[0]);

    }catch(e)  {
        if(e.code === '23505'){
            return next(new ExpressError("Username taken. Please choose another!",400));
        }
        return next(e);
    }
});

router.post('/login', async (req,res,next) => {
    try{
        const {username,password,is_admin}=req.body;
        if(!username || !password){
            throw new ExpressError("Username and Password required",400);
        }
        const results = await db.query('SELECT username,password,is_admin FROM users WHERE username=$1',[username]);
        const user = results.rows[0];
        if(user){
            
            if(await bcrypt.compare(password,user.password)){
                const token = jwt.sign({username,is_admin},SECRET_KEY);
                return res.json({message:'Logged in!', token})
            }
        }
        throw new ExpressError("Invalid username/password",400);
    }catch (e){
        return next(e)
    }
});

router.get('/Testtoken', ensureLoggedIn,(req,res,next) => {
    try{
        
        return res.json({message: "This is a authentication test"})
    } catch(e) {
        return next(new ExpressError("Please login first",401))
    }
})

module.exports = router;


