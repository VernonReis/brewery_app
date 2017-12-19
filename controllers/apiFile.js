const express = require('express');
const request = require('request');
const router = express.Router();

const ApiKey = process.env.MONGODB_URI || require('../public/ApiKey');


router.options('/', async (req, res) => {

    let locality = "";
    let region = "";
    let postalCode = "";

    if (req.body.locality != null) {
        locality = "locality=" + req.body.locality + "&";
    }

    if (req.body.region != null) {
        region = "region=" + req.body.region + "&";
    }

    if (req.body.postalCode != null) {
        postalCode = "postalCode=" + req.body.postalCode + "&";
    }

    console.log(locality, region, postalCode);

    test = request("http://api.brewerydb.com/v2/locations/?" + locality + region + postalCode + "&isClosed=false&key=" + ApiKey, (error, response, body) => {
        myTest = JSON.parse(body);



        res.send(myTest);
    });
    // res.send(allUsers);
});


module.exports = router;
