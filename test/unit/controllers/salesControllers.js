const sinon = require('sinon');
const { expect } = require('chai');

const salesController = require('../../../controllers/sales');
const salesService = require('../../../services/sales');
const { getSaleById, allSales, } = require('../mocks/salesMock');

describe('Verifica se a rota /sales retorna as vendas corretamente', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  describe('tem o retorno correto em listar todas as vendas', async () => {
    before(() => {
      sinon.stub(salesService, 'list').resolves(allSales);
    });

    after(() => {
      salesService.list.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await salesController.list(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(allSales)).to.be.equal(true);
    });
  });
  describe('retorna um produto baseado no id', () => {
    before(() => {
      sinon.stub(salesService, 'listById').resolves(getSaleById);
    });

    after(() => {
      salesService.listById.restore();
    });

    it('retorna um objeto', async () => {
      await salesController.listById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});                                                                                