const connection = require('./connection');

const verifyProductExistsName = async ({ name }) => {
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
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
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

const update = async (id, name, quantity) => {
  const productExists = await listById(id);
  if (productExists.length) {
    const query = `UPDATE StoreManager.products
    SET name = ?, quantity = ?
    WHERE id = ?`;
    await connection.execute(query, [name, quantity, id]);
    return {
      id,
      name,
      quantity,
    };
  }
  throw new Error('Product not found');
};

const deleteProduct = async (id) => {
  const productExists = await listById(id);
  if (productExists.length) {
    const query = 'DELETE FROM StoreManager.products WHERE id = ?;';
    await connection.execute(query, [id]);
    return null;
  }
  throw new Error('Product not found');
};

module.exports = {
  list,
  listById,
  create,
  verifyProductExistsName,
  update,
  deleteProduct,
};