const productRouter = require('express').Router();
const productController = require('../controllers/products');
const { validateName, validateQuantity } = require('../middlewares/validateProductMiddleware');

productRouter.get('/', productController.list);

productRouter.post('/', validateName, validateQuantity,
  productController.create);

productRouter.get('/:id', productController.listById);

module.exports = productRouter;