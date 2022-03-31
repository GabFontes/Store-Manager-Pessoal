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

const create = async (sale) => {
  const saleIdQuery = 'INSERT INTO StoreManager.sales (id) VALUES (null)';
  const [saleId] = await connection.execute(saleIdQuery);

  const salesProductsQuery = `INSERT INTO StoreManager.sales_products
   (sale_id, product_id, quantity) VALUES (?, ?, ?)`;

  await sale.map(({ productId, quantity }) => connection
      .execute(salesProductsQuery, [saleId.insertId, productId, quantity]));

  return {
    id: saleId.insertId,
    itemsSold: sale,
  };
};

module.exports = {
  list,
  listById,
  create,
};