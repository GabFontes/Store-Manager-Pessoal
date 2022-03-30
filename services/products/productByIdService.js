const productModel = require('../../models/productModel');

const getProductById = async (id) => {
  const product = await productModel.listById(id);
  if (product.length < 1) throw new Error({ message: 'Product not found' });
  const obj = {
    id: product[0].id,
    name: product[0].name,
    quantity: product[0].quantity,
  };
  return obj;
};

module.exports = getProductById;