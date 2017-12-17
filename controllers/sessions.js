const express = require('express');
const router = express.Router();

const User = require('../models/users.js');

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user.authenticate(req.body.password)) {
            req.session.user = user;
            res.status(200).json({ user, message: 'Log in successful' });
        } else {
            res.status(403).json({ err: 'Login Failed' });
        }

    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.delete('/logout', (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: 'Session Data Destroyed' });
    });
});


module.exports = router;