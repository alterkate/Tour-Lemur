const router = require('express').Router();
// const e = require('express');
const { json } = require('sequelize');
const {
  Trips,
  Complexities,
  Children,
  Directions,
  Durations,
  Seasones,
  Photos,
} = require('../db/models');

// выводим все путешествия на страницу с путешествиями
router.get('/', async (req, res) => {
  try {
    const result = await Trips.findAll({
      include: [
        { model: Complexities, attributes: ['level'] },
        { model: Children, attributes: ['child'] },
        { model: Directions, attributes: ['direction'] },
        { model: Durations, attributes: ['duration'] },
        { model: Seasones, attributes: ['season'] },
        { model: Photos },
      ],
      where: { visible: true },
    });

    const finalrResult = result.map((el) => ({
      id: el.id,
      title: el.title,
      description: el.description,
      start: el.start,
      end: el.end,
      price: el.price,
      visible: el.visible,
      level: el.Complexity.level,
      children: el.Child.child,
      direction: el.Direction.direction,
      duration: el.Duration.duration,
      season: el.Seasone.season,
      mainPhoto: el.Photo.main,
      otherPhotos: [el.Photo.photo1, el.Photo.photo2, el.Photo.photo3],
    }));
    // console.log(result);
    res.json(finalrResult);
  } catch (error) {
    return json('не удалось загрузить информацию', error);
  }
});

// получаем одно путешествие
router.get('/:tripId', async (req, res) => {
  try {
    const { tripId } = req.params;
    const result = await Trips.findOne({
      where: { id: tripId },
      include: [
        { model: Complexities, attributes: ['level'] },
        { model: Children, attributes: ['child'] },
        { model: Directions, attributes: ['direction'] },
        { model: Durations, attributes: ['duration'] },
        { model: Seasones, attributes: ['season'] },
        { model: Photos },
      ],
    });
    console.log('0000000000000000', result);
    // const finalrResult = result.map((el) => ({
    //   id: el.id,
    //   title: el.title,
    //   description: el.description,
    //   start: el.start,
    //   end: el.end,
    //   price: el.price,
    //   visible: el.visible,
    //   level: el.Complexity.level,
    //   children: el.Child.child,
    //   direction: el.Direction.direction,
    //   duration: el.Duration.duration,
    //   season: el.Seasone.season,
    //   mainPhoto: el.Photo.main,
    //   otherPhotos: [el.Photo.photo1, el.Photo.photo2, el.Photo.photo3],
    // }));
    // console.log('-------------', finalrResult);
    res.json(result);
  } catch (error) {
    return json('не удалось загрузить информацию', error);
  }
});

module.exports = router;
