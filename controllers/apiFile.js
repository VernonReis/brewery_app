const express = require('express');
const request = require('request');
const router = express.Router();

const ApiKey = process.env.MONGODB_URI || require('../public/ApiKey');


router.get('/', async (req, res) => {

    test = request("http://api.brewerydb.com/v2/?key=" + ApiKey, (error, response, body) => {
        myTest = JSON.parse(body);

        

        res.send(myTest);
    });
    // res.send(allUsers);
});


module.exports = router;
