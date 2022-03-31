const salesRouter = require('express').Router();
const salesController = require('../controllers/sales');
const validateSaleMiddleware = require('../middlewares/validateSaleMiddleware');

salesRouter.get('/', salesController.list);

salesRouter.post('/', validateSaleMiddleware, salesController.create);

salesRouter.put('/:id', validateSaleMiddleware, salesController.update);

salesRouter.get('/:id', salesController.listById);

module.exports = salesRouter;