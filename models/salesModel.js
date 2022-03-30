const connection = require('./connection');

const list = async () => {
  const query = `SELECT
    SA.id AS saleId, 
    SA.date,
    SL.product_id AS productId,
    SL.quantity
    FROM StoreManager.sales_products AS SL
    JOIN StoreManager.sales AS SA
    ON SL.sale_id = SA.id;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const listById = async (id) => {
  const query = `SELECT
  SA.date,
  SL.product_id AS productId,
  SL.quantity
  FROM StoreManager.sales_products AS SL
  JOIN StoreManager.sales AS SA
  ON SL.sale_id = SA.id
  WHERE sale_id = ?;`;
  const [product] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  list,
  listById,
};