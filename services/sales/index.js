const list = require('./allSalesService');
const listById = require('./saleByIdService');
const create = require('./createSaleService');
const update = require('./updateSaleService');

module.exports = {
  list,
  listById,
  create,
  update,
};
