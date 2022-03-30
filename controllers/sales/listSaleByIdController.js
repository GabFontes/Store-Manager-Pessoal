const salesService = require('../../services/sales');

const listSaleByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.listById(id);
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = listSaleByIdController;