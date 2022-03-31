const productsService = require('../../services/products');

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await productsService.deleteProduct(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = deleteProductController;