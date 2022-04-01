const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');
const { allProducts, productById, createProduct } = require('../mocks/productsMock');

describe('Verifica se a rota /products retorna os produtos corretamente', () => {
  describe('retorna todos os produtos', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(allProducts);
    });

    after(() => {
      connection.execute.restore();
    });

    it('verifica se é um array', async () => {
      const response = await productModel.list();
      expect(response).to.be.a('array')
    });

    it('verifica se retorna três produtos', async () => {
      const response = await productModel.list();
      expect(response).to.have.length(3)
    });
  });
  describe('retorna um produto baseado no id', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(productById);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const response = await productModel.listById(2);
      expect(response).to.be.a('object');
    });
  });
  describe('cria um produto', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(createProduct);
      sinon.stub(productModel, 'create').resolves(createProduct);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const response = await productModel.create({ name: 'product', quantity: 100 });
      expect(response).to.be.a('object');
    });
  });
});                                                                                