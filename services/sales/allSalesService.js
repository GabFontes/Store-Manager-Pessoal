const salesModel = require('../../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.list();
  if (sales.length < 1) throw new Error({ message: 'Sale not found' });
  return sales;
};

module.exports = getAllSales;