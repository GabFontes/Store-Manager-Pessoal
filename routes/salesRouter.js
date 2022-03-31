const salesRouter = require('express').Router();
const salesController = require('../controllers/sales');
const { validateSale, validateIfIsNumber } = require('../middlewares/validateSaleMiddleware');

salesRouter.get('/', salesController.list);

salesRouter.post('/', validateSale, salesController.create);

salesRouter.put('/:id', validateSale, validateIfIsNumber, salesController.update);

salesRouter.get('/:id', salesController.listById);

module.exports = salesRouter;