const express = require('express');
const router = express.Router();

const User = require('../models/users.js');

router.get('/', async (req, res) => {

    try {

        const user = await User.findOne( { username: req.session.user.username } );
        res.status(200).json(user);
    } catch (err) {

        console.log(err);
        res.status(400).json({ err: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        req.session.user = user;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});


module.exports = router;