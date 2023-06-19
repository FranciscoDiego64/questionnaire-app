const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/Questionnaire'); // update the path based on your project structure

// GET route to fetch all questionnaires
router.get('/', async (req, res) => {
    try {
        const questionnaires = await Questionnaire.find({});
        res.json(questionnaires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a specific questionnaire by its ID
router.get('/:id', async (req, res) => {
    try {
        const questionnaire = await Questionnaire.findById(req.params.id);
        if (!questionnaire) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }
        res.json(questionnaire);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
