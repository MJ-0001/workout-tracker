const router = require('express').Router();
const path = require("path");

const main = path.join(__dirname, '../public');

router.get('/', (req, res) => res.sendFile(path.join(main, 'index.html')));

router.get('/exercise', (req, res) => res.sendFile(path.join(main, 'exercise.html')));

router.get('/stats', (req, res) => res.sendFile(path.join(main, 'stats.html')));

module.exports = router;