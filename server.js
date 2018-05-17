const querystring = require('querystring');
const bodyParser = require('body-parser');
const express    = require('express');
const axios      = require('axios');
const http       = require('http');
const fs         = require('fs');
const app        = express();
const credentials = getCredentials();

// Serve dist directory
app.use('/', express.static('dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/send_sms', (req, res, next) => {
    const {phone, message} = req.body;

    const API_KEY = credentials.API_KEY;
    const API_SECRET = credentials.API_SECRET;

    const data = {
        to: phone,
        message
    };

    const url = 'http://api.transmitsms.com/send-sms.json';

    const token = btoa(`${API_KEY}:${API_SECRET}`);

    const headers = {
        'Authorization': 'Basic ' + token,
        'content-type': 'application/x-www-form-urlencoded'
    };

    const options = {
        method: 'POST',
        data: querystring.stringify(data),
        url,
        headers
    };

    console.log(credentials);

    axios(options)
    .then( (response) => {
        res.status(200).send({
            message: 'SMS sent!'
        });
    })
    .catch( (response) => {
        console.log(response.response);

        res.status(400).send({
            message: 'Failed to send SMS.'
        });
    });
});

http.createServer(app).listen(3000, () => {
    console.log("Open app at http://localhost:3000");
});

function getCredentials() {
    try {
        const data = fs.readFileSync('./.env', 'utf8');
        const lines = data.split('\n');

        const credentials = lines.reduce((obj, line) => {
            const parsed = line.split("=");
            const key = (parsed[0] || '').trim();
            const value = (parsed[1] || '').trim();

            obj[key] = value;

            return obj;
        }, {});

        return credentials;
    } catch (error) {
        throw error;
    }
}

function btoa(string) {
    return Buffer.from(string).toString('base64');
}