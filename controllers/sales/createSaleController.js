const salesService = require('../../services/sales');

const createSaleController = async (req, res) => {
  try {
    const newSale = await salesService.create(req.body);
    return res.status(201).json(newSale);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createSaleController;