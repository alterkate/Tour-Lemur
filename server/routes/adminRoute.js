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
//  TODO!!!!!!!! выводить только названия и id
// выводим все путешествия на страницу администратора TODO!!!!!!!!
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

// получаем одно путешествие для редактирования
router.get('/getone', async (req, res) => {
  try {
    const params = req.query.value;
    const result = await Trips.findOne({
      where: { title: params },
      include: [
        { model: Complexities, attributes: ['level'] },
        { model: Children, attributes: ['child'] },
        { model: Directions, attributes: ['direction'] },
        { model: Durations, attributes: ['duration'] },
        { model: Seasones, attributes: ['season'] },
        { model: Photos },
      ],
    });
    const finalrResult = {
      id: result.id,
      title: result.title,
      description: result.description,
      start: result.start,
      end: result.end,
      price: result.price,
      visible: result.visible,
      level: result.Complexity.level,
      children: result.Child.child,
      direction: result.Direction.direction,
      duration: result.Duration.duration,
      season: result.Seasone.season,
      mainPhoto: result.Photo.main,
      otherPhotos: [
        result.Photo.photo1,
        result.Photo.photo2,
        result.Photo.photo3,
      ],
    };
    // console.log(finalrResult, '=========');
    res.json(finalrResult);
  } catch (error) {
    return json('не удалось загрузить информацию', error);
  }
});

// TODO middleware ? изменение путешествия
router.put('/change/:id', async (req, res) => {
  console.log('ПРРРРРРРРРИИИВЕЕЕЕЕТТТТne try req.body', req.body);
  try {
    const { id } = req.params;
    await Trips.update(
      {
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        price: req.body.price,
        visible: req.body.visible,
        level: req.body.level,
        children: req.body.children,
        direction: req.body.direction,
        duration: req.body.duration,
        season: req.body.season,
        mainPhoto: req.body.mainPhoto,
        otherPhotos: [req.body.photo1, req.body.photo2, req.body.photo3],
      },
      { where: { id } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

// app.put('/task/:id/edit', async (req, res) => {
//   const { id } = req.params;
//   const task = await Task.findOne({ where: { id } });
//   task.title = req.body.title;
//   await task.save();
//   res.json(task);
// });

module.exports = router;
