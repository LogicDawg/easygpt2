const openaiClient = require("./api.js")

const generateessaay = async (essayDescription,numWords) => {


    const chatGptApi = async (essayDescription,numWords) => {
        const messages = [
            { "role": "system", "content": `You are a to write a college level essay with the provided number of words`},
            { "role": "user", "content": `Write a 25 word essay about volcanoes`},
            { "role": "assistant", content: `Volcanoes: Nature's fiery spectacles, where Earth's inner turmoil erupts in magnificent displays,
             shaping landscapes and reminding us of our planet's power and beauty.`},
            { role: "user", content: `Write a college level essay that has ${numWords} words and is about ${essayDescription}.`}
        ];
        const response = await openaiClient.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
        })
        return response.data.choices[0].message.content
    }

    return await chatGptApi(essayDescription,numWords)
}


module.exports = generateessaay;