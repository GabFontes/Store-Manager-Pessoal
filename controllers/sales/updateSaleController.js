const salesService = require('../../services/sales');

const updateSaleController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSale = await salesService.update(req.body, id);
    return res.status(200).json(updatedSale);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateSaleController;