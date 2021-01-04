const express = require('express');
const Resources = require('./model')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rescources = await Resources.getAll();
        res.status(200).json(rescources);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
      }
    });
  router.post('/', async (req, res) => {
    try {
    const body = req.body
    const data = await Resources.create(body)
        res.status(201).json(data)
    } catch (err) {
        res.status(500).json(err.message)
    }      
});
  
  module.exports = router;
