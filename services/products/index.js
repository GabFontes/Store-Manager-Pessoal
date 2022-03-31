const list = require('./allProductsService');
const listById = require('./productByIdService');
const create = require('./createProductService');
const update = require('./updateProductService');

module.exports = {
  list,
  listById,
  create,
  update,
};