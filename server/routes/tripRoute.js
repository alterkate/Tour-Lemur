const router = require('express').Router();
const { json } = require('sequelize');
const { Trips } = require('../db/models');

router.get('/', async (req, res) => {
  console.log('зашли в ручку');
  try {
    const result = await Trips.findAll({ raw: true });
    res.json(result);
  } catch (error) {
    return json(error);
  }
});

module.exports = router;
