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

router.delete('/:id', async (req, res) => {
    try {
        const checkReview = await Review.findByIdAndRemove(req.params.id);
        if (checkReview.user == req.session.user._id) {
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

router.put('/:id', async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(review);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

module.exports = router;
