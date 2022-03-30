const salesModel = require('../../models/salesModel');

const getSalesById = async (id) => {
  const sales = await salesModel.listById(id);
  if (sales.length === 0) throw new Error({ message: 'Sale not found' });
  return sales;
};

module.exports = getSalesById;