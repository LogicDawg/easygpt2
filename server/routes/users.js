const db = require("../db")
const express = require("express");
const router = express.Router();

router.get('/', async (req,res,next) => {
    try{
    const results = await db.query(`SELECT * FROM users`);
    return res.json(results.rows);
    } catch(e) {
       return next(e); 
    }
});

router.get('/search', async (req,res,next) => {
    try{
        const {is_admin} = req.query;
        const results = await db.query(`SELECT * FROM users WHERE is_admin=$1`,[is_admin])
        return res.json(results.rows)
    }catch(e){
        return next(e);
    }
});

router.get('/:username', async (req,res,next) => {
    const {username} = req.params;
    try{
        const userResults = await db.query('SELECT username,is_admin FROM users WHERE username=$1',[username])
        const requestResults = await db.query('SELECT id,body FROM requests WHERE username=$1',[username])
        const user = userResults.rows[0];
        user.requests = requestResults.rows;

        return res.send(user)
    }catch (e) {
        return next(e);
    }
});

router.get('/:username/:requestid', async (req,res,next) => {
    const {username, requestid} = req.params;
    try {
        const requestResults = await db.query('SELECT id,body FROM requests WHERE username=$1',[username])
        const responseResults = await db.query('SELECT body FROM response WHERE request_id=$1',[requestid])
        const request = requestResults.rows[0];
        request.response = responseResults.rows[0];
        return res.send(request)
        
    } catch (e) {
        return next(e);
        
    }
});

router.patch('/:username', async (req,res,next) => {
    try{
        const {username} = req.params;
        const {password,is_admin} = req.body;

        const results = await db.query('UPDATE users SET password=$1, is_admin=$2 WHERE username=$3 RETURNING *',
        [password,is_admin,username])
        return res.send(results.rows[0])
    }catch(e) {
        return next(e);
    }
});

router.delete('/:username', async (req,res,next) => {
    try{
        const {username} = req.params;
        const results = db.query('DELETE FROM users WHERE username=$1',[username])
        return res.send({msg:"Deleted"})

    }catch(e) {
        return next(e);
    }
});



module.exports = router;