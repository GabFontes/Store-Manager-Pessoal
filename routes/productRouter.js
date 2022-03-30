const productRouter = require('express').Router();
const productController = require('../controllers/products');

productRouter.get('/', productController.list);

productRouter.get('/:id', productController.listById);

module.exports = productRouter;