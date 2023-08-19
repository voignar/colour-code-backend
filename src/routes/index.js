const { Router } = require('express');
const router = Router();

router.get("/listado", (req, res) => {
    res.send("Listado de colores");
})

module.exports = router;