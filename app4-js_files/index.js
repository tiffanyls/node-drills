const express = require('express');
const bodyParser = require('body-parser');
const port= 3000;

const data = require('./data');

const app = express();

app.use(bodyParser.json());

app.get('/data', (req, res, next) => res.status(200).json(items));
app.post('/data', (req, res, next) => {
    data.push(req.body);
    res.status(200).json(data);
})

app.listen(port, function(){
    console.log('Listening on port', port);
})