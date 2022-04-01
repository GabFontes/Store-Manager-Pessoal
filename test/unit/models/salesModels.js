const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');
const { allSales, getSaleById, createSale } = require('../mocks/salesMock');

describe('Verifica se a rota /sales retorna as vendas corretamente', () => {
  describe('retorna todas as vendas', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(allSales);
    });

    after(() => {
      connection.execute.restore();
    });

    it('verifica se é um array', async () => {
      const response = await salesModel.list();
      expect(response).to.be.a('array');
    });
  });
  describe('retorna uma venda baseada no id', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(getSaleById);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const response = await salesModel.listById(2);
      expect(response).to.be.a('array');
    });
  });
  describe('cria uma venda', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(createSale);
      sinon.stub(salesModel, 'create').resolves(createSale);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array', async () => {
      const response = await salesModel.create([
        {
          "productId": 1,
          "quantity": 1
        }
      ]);
      expect(response).to.be.a('array');
    });
  });
});