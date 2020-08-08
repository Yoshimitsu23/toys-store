const express = require('express');
const router = express.Router();
const Product = require('../models/prods');

/* GET users listing. */
router.get('/all', (req, res) => {
    Product.find().then(data => res.json(data))
})

router.get('/', (req, res, next) => {
    let { page = 1, search = '' } = req.query;
    let mySearch = new RegExp(search, 'i');
    let limit = 5;
    Product.find({ name: mySearch })
        .limit(limit)
        .skip((page <= 0 ? 0 : page - 1) * limit).then(data => res.json(data))
});

router.get('/cat/:catId', (req, res, next) => {
    Product.find({ category: req.params.catId })
        .then(data => res.json({ status: "ok", body: data }))

});

router.post('/add', (req, res, next) => {
    Product.create(req.body)
        .then(data => res.json(data))
});

router.post('/edit', (req, res, next) => {
    Product.findOneAndUpdate({ _id: req.body.id }, req.body)
        .then(data => Product.findById({ _id: data._id }).then(data => res.json(data)))
});

router.post('/delete', (req, res, next) => {
    Product.findOneAndRemove({ _id: req.body.id })
        .then(data => res.json({ status: "ok", body: "deleted" }))
});



module.exports = router;