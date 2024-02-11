const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

function fileToGenerativeParts(path, mimeType){
    return{
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        }
    };
}

function generateImageParts(imageparts){
    const generativeImageParts = [];
    imageparts.forEach(image => {
        generativeImageParts.push(fileToGenerativeParts(image.path, image.mimeType));
    });
    return generativeImageParts;
}

// use this class to analyze images along with texts
class GeminiProVision{
    constructor(){
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({
            model: "gemini-pro-vision"
        });
    }

    async text_image_response(prompt, imageparts){
        const generativeImageParts = generateImageParts(imageparts)
        const result = await this.model.generateContent([prompt, ...generativeImageParts]);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

module.exports = GeminiProVision;