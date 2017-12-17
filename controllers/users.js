const express = require('express');
const router = express.Router();

const User = require('../models/users.js');




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
        await Book.remove({ user: user.id });
        res.status(200).json({ message: 'Book removed' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});