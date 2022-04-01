const sinon = require('sinon');
const { expect } = require('chai');

const productsController = require('../../../controllers/products');
const productService = require('../../../services/products');
const { allProducts, productById } = require('../mocks/productsMock');

describe('Verifica se a rota /products retorna os produtos corretamente', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  describe('retorna todos os produtos', async () => {
    before(() => {
      sinon.stub(productService, 'list').resolves(allProducts);
    });

    after(() => {
      productService.list.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await productsController.list(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(allProducts)).to.be.equal(true);
    });
  });
  describe('retorna um produto baseado no id', () => {
    before(() => {
      sinon.stub(productService, 'listById').resolves(productById);
    });

    after(() => {
      productService.listById.restore();
    });

    it('retorna um objeto', async () => {
      await productsController.listById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});                                                                                