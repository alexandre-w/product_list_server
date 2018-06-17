const productRouter = require('express').Router();
const productController = require('./productController');


productRouter.route('/')
  .get(productController.getAll)
  .post(productController.post);

  productRouter.route('/:id')
  .put(productController.put)

module.exports = productRouter;