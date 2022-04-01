const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/sales');
const salesModel = require('../../../models/salesModel');
const { getSaleById, allSales, } = require('../mocks/salesMock');

describe('Verifica se a rota /sales retorna as vendas corretamente', () => {
  describe('retorna todas as vendas', async () => {
    before(() => {
      sinon.stub(salesModel, 'list').resolves(allSales);
    });

    after(() => {
      salesModel.list.restore();
    });

    it('verifica se é um array', async () => {
      const response = await salesService.list();
      expect(response).to.be.a('array')
    });

    it('verifica se retorna um produto', async () => {
      const response = await salesService.list();
      expect(response).to.have.length(1)
    });
  });
  describe('retorna uma venda baseada no id', () => {
    before(() => {
      sinon.stub(salesModel, 'listById').resolves(getSaleById);
    });

    after(() => {
      salesModel.listById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await salesService.listById(2);
      expect(response).to.be.a('array');
    });
  });
});                                                                                