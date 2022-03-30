const productsService = require('../../services/products');

const listProductsController = async (req, res) => {
  try {
    const productsList = await productsService.list();
    return res.status(200).json(productsList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = listProductsController;