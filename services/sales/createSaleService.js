const salesModel = require('../../models/salesModel');

const createSaleService = async (sale) => {
  const newSale = await salesModel.create(sale);
  return newSale;
};

module.exports = createSaleService;