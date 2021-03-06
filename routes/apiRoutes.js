const router = require('express').Router();
const { Workout } = require('../models/Workout');

router.get('/', (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
  .sort({ date: -1 })
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get('/range', (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
  .sort({ date: -1 })
  .limit(7)
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post('/', ({ body }, res) => {
  Workout.create({ body })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;