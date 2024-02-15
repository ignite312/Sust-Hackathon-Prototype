/*
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const GeminiPro = require('./GeminiPro');
const fs = require('fs');
const GeminiProVision = require('./GeminiProVision');
const markdown = require('markdown-it')();
const db = require('./db');
const { table } = require('console');

// App creation
const app = express();

// Middlewares
// app.use(bodyparser.json());
// app.use(cors());

// App globals
PORT = 8000;
const geminiPro = new GeminiPro();
const geminiProVision = new GeminiProVision();
const qbdb = new db();
const tables = []
qbdb.showtables(tables);
console.log(tables);

Basic Gemini text to text response
app.post('/text-response', async (req, res) => {
    const text = req.body.text;
    const resptext = await geminiPro.text_response(text);
    fs.writeFile('gemini.md', resptext, (err) => {
        if(err){
            console.error('ERROR RENDERING MARKDOWN: ', err);
            return;
        }
        console.log('Successfully written markdown response');
    });
    return res.status(200).json({
        gemini_response: resptext
    });
});

// Gemini image to text response
app.post('/text-image-response', async (req, res) => {
    const {prompt, imageparts} = req.body;
    const resptext = await geminiProVision.text_image_response(prompt, imageparts);
    fs.writeFile('gemini.md', resptext, (err) => {
        if(err){
            console.error('ERROR RENDERING MARKDOWN: ', err);
            return;
        }
        console.log('Successfully written markdown response');
    });
    return res.status(200).json({
        gemini_response: resptext
    });
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
*/






// Practice
const express = require('express');
const logger = require('./middleware/logger');

// App creation
const app = express();

// App globals
const PORT = 8000;

// Body parser middleware
app.use(express.json);
app.use(express.urlencoded({extended : false}));

app.use(logger);
// Students api route
app.use('/api/students', require('./routes/api/students'));

// Server initiation
const server = app.listen(PORT, (err) => {
    if (err) {
        console.error('Error initiating express server: ', err);
    } else {
        console.log(`Server running on: http://localhost:${PORT}`);
    }
});
