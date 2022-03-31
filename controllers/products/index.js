const list = require('./listProductsController');
const listById = require('./listProductByIdController');
const create = require('./createProductController');
const update = require('./updateProductController');
const deleteProduct = require('./deleteProductController');

module.exports = {
  list,
  listById,
  create,
  update,
  deleteProduct,
};