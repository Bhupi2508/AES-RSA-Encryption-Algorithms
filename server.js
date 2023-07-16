/******************************************************************************
@Execution : node : nodemon server.js
@description : Root file for the server
@overview : AES Algorithms
@version : 1.0
@since : 16-July-2023
******************************************************************************/

const cors = require('cors');
const express = require('express');
const { publicKey, privateKey } = require('./generateKeys'); // Asymmetric
const secretKey = 'MySecretKey'; // Symmetric
const { asymmetricEncrypt, asymmetricDecrypt } = require('./Asymmetric AES/Asymmetric');
const { symmetricEncrypt, symmetricDecrypt } = require('./Symmetric AES/Symmetric');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine

// Add middleware for parsing URL encoded bodies (which are usually sent by the browser)
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Route to render the HTML page
app.get('/', (req, res) => {
    res.render('index.ejs', { result: null }); // Render the index.ejs file with the initial result as null
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { input1, input2, input3 } = req.body;
    let result;

    if (input1 === 's') {
        try {
            result = (input2 === 'enc') ? symmetricEncrypt(input3, secretKey) : symmetricDecrypt(input3, secretKey);
        } catch (e) {
            result = "Error! Please make sure your algorithm or payload is correct.";
        }
    } else if (input1 === 'a') {
        try {
            result = (input2 === 'enc') ? asymmetricEncrypt(input3, publicKey) : asymmetricDecrypt(input3, privateKey);
        } catch (e) {
            result = "Error! Please make sure your algorithm or payload is correct.";
        }
    }
    res.render('index.ejs', { result }); // Render the index.ejs file with the updated result
});

const port = 5000;
app.listen(port, () => {
    console.log(`🚀 Server is live on port ${port}`);
});
