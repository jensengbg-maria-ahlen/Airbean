const shortid = require('shortid')
const { Router } = require('express');
const router = new Router();
const db = require('./../database');

router.post('/', (req, res) => {
    let order = {
        orderNr: shortid(),
        timeStamp: Date.now(),
        items: req.body.items,
    }

    db.get('orders').push(order).write();
    res.send({orderNr: 'Ordernummer: #' + order.orderNr, msg: 'Din beställning är på väg!' })
});

module.exports = router;