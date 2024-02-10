const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const GeminiPro = require('./GeminiPro');

// App creation
const app = express();

// Middlewares
app.use(bodyparser.json());
app.use(cors());

// App globals
PORT = 8000;
const geminiPro = new GeminiPro();

app.get('/text-response', async (req, res) => {
    const text = req.body.text;
    console.log(typeof text);
    const resptext = await geminiPro.text_response(text);
    return res.status(200).json({
        message: resptext
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