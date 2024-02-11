const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

// use this class to generate 
class GeminiPro{
    constructor(){
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({
            model: "gemini-pro"
        });
    }

    async text_response(prompt){
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

module.exports = GeminiPro;