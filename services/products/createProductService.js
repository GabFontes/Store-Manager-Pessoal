const productModel = require('../../models/productModel');

const createProductService = async (product) => {
  const productExists = await productModel.verifyProductExistsName(product);
  if (productExists.length) {
    throw new Error('Product already exists');
  }
  const newProduct = await productModel.create(product);
  return newProduct;
};

module.exports = createProductService;