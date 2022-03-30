const productModel = require('../../models/productModel');

const getAllProducts = async () => {
  const productsList = await productModel.list();
  if (productsList.length < 1) throw new Error({ message: 'Nenhum produto encontrado' });
  return productsList;
};

module.exports = getAllProducts;