const salesService = require('../../services/sales');

const updateSaleController = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body[0];
    console.log('controller', { productId, quantity, id });
    const updatedSale = await salesService.update(productId, quantity, id);
    return res.status(200).json(updatedSale);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateSaleController;