const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

class GeminiPro{
    constructor(){
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({
            model: "gemini-pro",
        });
    }

    async text_response(prompt){
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        const resptext = response.text();
        console.log(resptext);
        return resptext;
    }
}

module.exports = GeminiPro;