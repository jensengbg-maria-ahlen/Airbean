const { Router } = require('express');
const router = new Router();
const { db } = require('./../database')

router.get('/', (req, res) => {
    let menu = db.get('menu').value();
    let orders = db.get('orders').value();
    let users = db.get('users').value();
    res.send({menu: menu, orders: orders, users: users});
});

module.exports = router;