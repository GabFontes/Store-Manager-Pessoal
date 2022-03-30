const salesRouter = require('express').Router();
const salesController = require('../controllers/sales');

salesRouter.get('/', salesController.list);

salesRouter.get('/:id', salesController.listById);

module.exports = salesRouter;