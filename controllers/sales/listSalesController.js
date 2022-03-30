const salesService = require('../../services/sales');

const listSalesController = async (req, res) => {
  try {
    const sales = await salesService.list();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = listSalesController;