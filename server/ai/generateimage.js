const openaiClient = require("./api.js");


const generateImage = async (imageDescription) => {


    const chatGptApi = async (imageDescription) => {

        const response = await openaiClient.createImage({
            prompt : `${imageDescription}`,
            n:1,
            size: "512x512",
        });
        return response.data.data[0].url;
    }

    return await chatGptApi(imageDescription);
}

module.exports = generateImage;