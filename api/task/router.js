// build your `/api/tasks` router here

const express = require('express');
const Tasks = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
      }
    });
    router.post('/', async (req, res) => {
        try {
        const body = req.body
        const data = await Tasks.create(body)
            res.status(201).json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }      
    });

module.exports = router;
