const algosdk = require('algosdk');
const compile = require('./compile/compile');
const newStructure = require('./newStructure');
const structure = require('./structure');
const structureRefreshed = require('./structureRefreshed');
const allOrderBookOrders = require('../../test/fixtures/allOrderBooks');
const {getAccountInfo} = require('../functions/base');
const algodexApi = require('../AlgodexApi');
const { not } = require('ajv/dist/compile/codegen');

// const takerOrderBalance = {
// 	'asaBalance': orderAssetBalance,
// 	'algoBalance': orderAlgoBalance,
// 	'walletAlgoBalance': walletAlgoAmount,
// 	'walletASABalance': walletAssetAmount,
// 	'limitPrice': limitPrice,
// 	'takerAddr': userWalletAddr,
// 	'walletMinBalance': takerMinBalance,
// 	'takerIsOptedIn': takerIsOptedIn,
// };

// if (process.env.TEST_ENV !== 'integration') {
//   jest.setMock('../HTTP/HTTPClient.js', require('../HTTP/__mocks__/HTTPClient.js'));
// }

/**
   *
   * @type {spec.APIProperties}
   */
const apiProps = {
  config: {
	  'algod': {
      'uri': 'http://ec2-18-216-194-132.us-east-2.compute.amazonaws.com',
      'token': '11e4dcfb445a8c7e8380848747f18afcd5d84ccb395e003e5b72127ca5e9a259',
      'port': 8080,
	  },
	  'indexer': {
      'uri': 'https://algoindexer.testnet.algoexplorerapi.io',
      'token': '',
	  },
	  'dexd': {
      'uri': 'https://api-testnet-public.algodex.com/algodex-backend',
      'token': '',
	  },
  },
};

const api = new algodexApi(apiProps);

it('test newStructure works with compile step', async () => {
  const buyOrder = require('../__tests__/Orders.json')[1];
  const sellOrder = require('../__tests__/Orders.json')[0];
  buyOrder.client = new algosdk.Algodv2(
      '11e4dcfb445a8c7e8380848747f18afcd5d84ccb395e003e5b72127ca5e9a259',
      'http://ec2-18-216-194-132.us-east-2.compute.amazonaws.com', 8080);
  sellOrder.client = new algosdk.Algodv2(
      '11e4dcfb445a8c7e8380848747f18afcd5d84ccb395e003e5b72127ca5e9a259',
      'http://ec2-18-216-194-132.us-east-2.compute.amazonaws.com', 8080);
  // const compiledBuyOrder = await compile(buyOrder);
  const newBuyorder = await api.placeOrder(
      buyOrder, {wallet: {
	 type: 'sdk',
	  connector: {
          connected: true,
	  },
	  address: 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
      }});

	const newSellOrder = await api.placeOrder(
		sellOrder, {wallet: {
			connector: {
				connected: true,
			},
			address: "QD2E5LWLAYAJLWQNF2CPUM23OZ347Z6FMDMQPLMIW7VYK5B2IES4Z2S57U"
		}}
	)

  const sellResult = await structureRefreshed(newSellOrder)
	expect(sellResult.contract.txns).toBeTruthy();


  const buyResult = await structureRefreshed(newBuyorder);
  expect(buyResult.contract.not.txns).toBeTruthy();

}, 600000);