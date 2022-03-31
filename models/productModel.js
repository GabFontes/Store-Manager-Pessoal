const connection = require('./connection');

const verifyProductExists = async ({ name }) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
  const [product] = await connection.execute(query, [name]);
  return product;
};

const list = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

const listById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute(query, [name, quantity]);
  return {
    id: insertId,
    name,
    quantity,
  };
};

module.exports = {
  list,
  listById,
  create,
  verifyProductExists,
};