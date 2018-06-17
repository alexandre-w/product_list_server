var router = require('express').Router();

router.use('/product', require('./product/productRouter'));

module.exports = router;