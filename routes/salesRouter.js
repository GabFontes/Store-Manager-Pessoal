const salesRouter = require('express').Router();
const salesController = require('../controllers/sales');
const validateSaleMiddleware = require('../middlewares/validateSaleMiddleware');

salesRouter.get('/', salesController.list);

salesRouter.get('/:id', salesController.listById);

salesRouter.post('/', validateSaleMiddleware, salesController.create);

module.exports = salesRouter;