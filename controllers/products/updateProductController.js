const productsService = require('../../services/products');

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const product = await productsService.update(id, name, quantity);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = updateProductController;