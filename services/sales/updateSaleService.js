const salesModel = require('../../models/salesModel');

const updateSaleService = async (productId, quantity, id) => {
  console.log('services', { productId, quantity, id });
  const updatedSale = await salesModel.update(productId, quantity, id);
  return updatedSale;
};

module.exports = updateSaleService;