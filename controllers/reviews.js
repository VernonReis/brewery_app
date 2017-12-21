const express = require('express');
const router = express.Router();

const Review = require('../models/reviews');

router.get('/', async (req, res) => {
    const reviews = await Review.find().populate('user');
    res.status(200).json(reviews);
});

router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(200).json(review);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

router.delete('/:id/:userid', async (req, res) => {
    try {

        if (req.params.userid == req.session.user._id) {
            const review = await Review.findByIdAndRemove(req.params.id);
            res.status(200).json(review);
        }
        else {
            res.status(401).send("Insufficient Authorization");
        }
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.get('/:brewId', async (req, res) => {
    try {
        const reviews = await Review.find({ breweryID: req.params.brewId });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.put('/:id/:userid', async (req, res) => {
    try {

        if (req.params.userid == req.session.user._id) {
            const review = await Review.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(review);
        }
        else {
            res.status(401).send("Insufficient Authorization");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

router.get('/count/:id/:userid', async (req, res) => {
    try {


        const review = await Review.find({ breweryID: req.params.id, userID: req.params.userid });
        console.log(review);
        res.status(200).json(true);

    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

module.exports = router;
