const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.post('/', (req, res) => {
    let userValue = req.body;
    
    if(!userValue) {
        res.send({ msg: 'Nope'});
    } else {
        let user = db.get('users').find({email: userValue.email}).value();
        res.send(user);
    }
});

module.exports = router;