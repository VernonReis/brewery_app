const express = require('express');
const router = express.Router();

const Brewery = require('../models/brewery.js');

router.get('/', async (req, res) => {

	try {

		const allbrewery = await Brewery.find();
		res.status(200).json(allbrewery);
	}
	catch (err) {

		res.status(400).send(err.message);
	}
});

router.post('/', async (req, res) => {

	try {

		const addbrewery = await Brewery.create(req.body);
		res.status(200).json(addbrewery);
	} catch (err) {

		res.status(400).send(err.message);
	}
});

router.put('/:id', async (req, res) => {

	try {

		const editbrewery = await Brewery.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(editbrewery);
	} catch (err) {

		res.status(400).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {

	try {

		const rmbrewery = await Brewery.findByIdAndRemove(req.params.id);
		res.status(200).json(rmbrewery);
	}
	catch (err) {

		res.status(400).send(err.message);
	}
});

module.exports = exports.Router();
