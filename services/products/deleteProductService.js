const productModel = require('../../models/productModel');

const deleteProductService = async (id) => {
  await productModel.deleteProduct(id);
};

module.exports = deleteProductService;