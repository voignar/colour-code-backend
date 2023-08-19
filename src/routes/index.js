const { Router } = require('express');
const router = Router();
const { getCodigos } = require('../controllers/index.controllers');

router.get("/codigos", getCodigos);

module.exports = router;