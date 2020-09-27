const { Router } = require('express');
const router = new Router();
const { db } = require('./../database')

router.get('/', (req, res) => {
    let menu = db.get('menu').value();
    res.send({menu: menu});
});

module.exports = router;