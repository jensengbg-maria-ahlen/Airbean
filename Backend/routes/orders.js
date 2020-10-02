const shortid = require('shortid')
const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.post('/', (req, res) => {
    function randomMinutes(min, max) {
        min = 5;
        max = 20;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function date() {
        let newDate = new Date().toISOString().slice(0,10);
        return newDate;
    }

    let order = {
        items: req.body.items,
        orderNr: shortid(),
        totalCost: req.body.items.reduce((acc, item) => acc + (item.quantity * item.price), 0),
        est: randomMinutes(),
        date: date()
    }

    db.get('orders').push(order).write();
    res.send({orderNr: 'Ordernummer: #' + order.orderNr, msg: 'Din beställning är på väg!', est: order.est, date: order.date})
});

module.exports = router;