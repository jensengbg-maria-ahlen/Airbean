const shortid = require('shortid')
const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.post('/', (req, res) => {
    let users = {
        user: req.body.userID,
        id: shortid()
    }

    db.get('users').push(users).write();
    res.send({user: users.user, id: users.id})
});

module.exports = router;