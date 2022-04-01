const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/products');
const productModel = require('../../../models/productModel');
const { allProducts, productById } = require('../mocks/productsMock');

describe('Verifica se a rota /products retorna os produtos corretamente', () => {
  describe('retorna todos os produtos', async () => {
    before(() => {
      sinon.stub(productModel, 'list').resolves(allProducts);
    });

    after(() => {
      productModel.list.restore();
    });

    it('verifica se é um array', async () => {
      const response = await productsService.list();
      expect(response).to.be.a('array')
    });

    it('verifica se retorna um produto', async () => {
      const response = await productsService.list();
      expect(response).to.have.length(1)
    });
  });
  describe('retorna um produto baseado no id', () => {
    before(() => {
      sinon.stub(productModel, 'listById').resolves(productById);
    });

    after(() => {
      productModel.listById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await productsService.listById(2);
      expect(response).to.be.a('object');
    });
  });
});                                                                                