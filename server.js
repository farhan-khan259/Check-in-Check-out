
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


// api

// login
app.post('/formfulldata', (req, res) => {
    const { email, password } = req.body;


    console.log('Received data:', { email, password });
    res.json({ message: 'Data received successfully' });
});


// Register
app.post('/registerformfulldata', (req, res) => {
    const {
        name,
        email,
        password,
        education,
        niche, } = req.body;


    console.log('Received data:', {
        email,
        password,
        education,
        niche,
    });
    res.json({ message: 'Data received successfully' });


    // Request Leave    
    app.post('/leaveRequest', (req, res) => {
        const { name,
            phoneNumber,
            designation,
            leaveFrom,
            leaveTo,
            reason, } = req.body;


        console.log('Received data:', {
            name,
            phoneNumber,
            designation,
            leaveFrom,
            leaveTo,
            reason,
        });
        res.json({ message: 'Data received successfully' });
    });

});





app.listen(port, () => {
    console.log("Server is running on ", { port });
});


