const productsService = require('../../services/products');

const createProductController = async (req, res) => {
  try {
    const newProduct = await productsService.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = createProductController;