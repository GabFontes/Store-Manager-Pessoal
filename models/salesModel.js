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
  const saleIdQuery = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
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

const update = async (values, id) => {
  const query = `UPDATE StoreManager.sales_products 
  SET product_id = ?, quantity = ? WHERE sale_id = ?`;
  const promises = values.map(({ productId, quantity }) => connection
    .execute(query, [productId, quantity, id]));
    await Promise.all(promises);
  const responseObj = {
    saleId: id,
    itemUpdated: values,
  };
  return responseObj;
};

module.exports = {
  list,
  listById,
  create,
  update,
};