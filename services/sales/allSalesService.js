const salesModel = require('../../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.list();
  if (sales.length < 1) throw new Error({ message: 'Sale not found' });
  // const renamedArr = sales.map((obj) => ({
  //   saleId: obj.sale_id,
  //   productId: obj.product_id,
  //   quantity: obj.quantity,
  //   date: obj.date,
  // }));
  return sales;
};

module.exports = getAllSales;