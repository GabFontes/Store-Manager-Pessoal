const list = require('./listProductsController');
const listById = require('./listProductByIdController');
const create = require('./createProductController');

module.exports = {
  list,
  listById,
  create,
};