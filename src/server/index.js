//for api key
const dotenv = require('dotenv');
dotenv.config();


//////////////////----------------/////////////////////

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const FormData = require('form-data');
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const StandardURL = 'https://api.meaningcloud.com/sentiment-2.1'

///testing api key
const key = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);

// Create an instance for the server
const app = express()
// handle cors to avoid cors-origin issue
app.use(cors())
// Configuring express to use body-parser as middle-ware.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// Configuring express static directory
app.use(express.static('dist'))
// handle base route
app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/artical', async (req, res) => {

    const formdata = new FormData();
    formdata.append("key", key);
    formdata.append("txt", req.body);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => ({
        status: response.status, 
        body: response.json()
      }))
      .then(({ status, body }) => console.log(status, body))
      .catch(error => console.log('error', error));
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

