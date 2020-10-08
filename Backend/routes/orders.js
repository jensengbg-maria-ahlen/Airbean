const shortid = require('shortid')
const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

function randomMinutes(min, max) {
    min = 5;
    max = 20;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function date() {
    let newDate = new Date().toISOString().slice(0,10);
    return newDate;
}

function getUser(user) {
    let userDB = db.get("users").find({ email: user.email }).value();
    return userDB
}

router.post('/', (req, res) => {
    let userReq = getUser(req.body.user);
    
    let order = {
        items: req.body.items,
        orderNr: shortid(),
        totalCost: req.body.items.reduce((acc, item) => acc + (item.quantity * item.price), 0),
        est: randomMinutes(),
        date: date(),
    }

    if(!userReq) {
        db.get('orders').push(order).write();
        res.send({orderNr: 'Ordernummer: #' + order.orderNr, msg: 'Din beställning är på väg!', est: order.est})
    } else {
        userReq.orderHistory.push(order);
        db.get("users").find({ email: userReq.email }).assign(userReq).write();
        res.send({orderNr: 'Ordernummer: #' + order.orderNr, msg: 'Din beställning är på väg!', est: order.est})
    }
});

module.exports = router;