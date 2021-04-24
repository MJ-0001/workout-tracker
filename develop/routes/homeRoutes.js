const router = require('express').Router();
const path = require('path');

router.get("/exercise", (_req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  } catch (error) {
    res.status(400).json(error)
  }
});

router.get("/stats", (_req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  } catch (error) {
    res.status(400).json(error)
  }
});

module.exports = router;