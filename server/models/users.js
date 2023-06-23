const db = require("../db");

class User {


    static async addToRequests(username,requestBody,responseBody){

        const results = await db.query('INSERT INTO requests (body,response,username) VALUES ($1,$2,$3) RETURNING body', [requestBody,responseBody,username],);

        const request = results.rows[0]

        return request;
    }





}

module.exports = User;