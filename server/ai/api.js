
const {Configuration,OpenAIApi} = require("openai")
const dotenv = require("dotenv")
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

if (!openaiApiKey){
    console.error('OPENAI_API_KEY is not set')
    process.exit(1)
}

// Set API configuration
const configuration = new Configuration({
    apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)

// export default openai;
module.exports = openai;