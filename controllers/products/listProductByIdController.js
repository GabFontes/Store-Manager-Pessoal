const productsService = require('../../services/products');

const listProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsService.listById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = listProductByIdController;