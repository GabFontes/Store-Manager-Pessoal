const productModel = require('../../models/productModel');

const updateProductService = async (id, name, quantity) => {
  const updatedProduct = await productModel.update(id, name, quantity);
  return updatedProduct;
};

module.exports = updateProductService;