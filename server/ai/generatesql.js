const openaiClient = require("./api.js")

const generatesql = async (queryDescription) => {


    const chatGptApi = async (queryDescription) => {
        const messages = [
            { "role": "system", "content": `You are a translator from plain English to SQL.`},
            { "role": "user", "content": `Convert the following natural language description into a SQL query: \n\nshow all elements from the users table.`},
            { "role": "assistant", content: `SELECT * FROM users;`},
            { role: "user", content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`}
        ];
        const response = await openaiClient.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
        })
        return response.data.choices[0].message.content
    }

    return await chatGptApi(queryDescription)
}


module.exports = generatesql;