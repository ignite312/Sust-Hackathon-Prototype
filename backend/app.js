const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const GeminiPro = require('./GeminiPro');
const fs = require('fs');
const markdown = require('markdown-it')();

// App creation
const app = express();

// Middlewares
app.use(bodyparser.json());
app.use(cors());

// App globals
PORT = 8000;
const geminiPro = new GeminiPro();

// Basic Gemini text to text response
app.get('/text-response', async (req, res) => {
    const text = req.body.text;
    const resptext = await geminiPro.text_response(text);
    fs.writeFile('gemini.md', resptext, (err) => {
        if(err){
            console.error('ERROR RENDERING MARKDOWN: ', err);
            return;
        }
        console.log('Successfully written markdown response');
    });
    const markdownresp = markdown.render(resptext);
    // console.log(markdownresp);
    return res.status(200).send(markdownresp);
});

// Server initiation
const server = app.listen(PORT, (err) => {
    if(err){
        console.error('Error initiating express server: ', err);
    }
    else{
        console.log(`Server running on: http://localhost:${PORT}`);
    }
});