const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');


router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = db.get("users").find({id: id}).value();
    res.send(user);
});

module.exports = router;