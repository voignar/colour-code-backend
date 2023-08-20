const { Router } = require('express');
const router = Router();
const { getCodigos, createCodigo } = require('../controllers/index.controllers');

router.post("/codigos", getCodigos);
router.post("/nuevo-codigo", createCodigo);

module.exports = router;