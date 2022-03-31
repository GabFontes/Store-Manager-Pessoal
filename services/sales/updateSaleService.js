const salesModel = require('../../models/salesModel');

const updateSaleService = async (values, id) => {
  const updatedSale = await salesModel.update(values, id);
  return updatedSale;
};

module.exports = updateSaleService;