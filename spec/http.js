const BASE_URL = 'https://api-testnet-public.algodex.com/algodex-backend';
const ASSET_ID = '15322902';
const WALLET = 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I';
const CHART_INTERVAL = '1h';

// Assets
module.exports[`${BASE_URL}/assets.php`] = {
  ok: true,
  rows: 4,
  offset: 0,
  data: [
    {
      'id': 15322902,
      'isTraded': true,
      'price': 295,
      'price24Change': 27.155172413793103,
      'priceBefore': 232,
      'unix_time': 1647364343,
    },
    {
      'id': 48806985,
      'isTraded': true,
      'price': 10000,
      'price24Change': 233.33333333333334,
      'priceBefore': 3000,
      'unix_time': 1647355388,
    },
    {
      'id': 44526812,
      'isTraded': true,
      'price': 100000,
      'price24Change': 0,
      'priceBefore': 100000,
      'unix_time': 1647355673,
    },
    {
      'id': 21547225,
      'isTraded': true,
      'price': 0.008810000011,
      'price24Change': 109.76191161632673,
      'priceBefore': 0.004199999868,
      'unix_time': 1647360528,
    },
  ],
};
module.exports[`${BASE_URL}/assets.php?id=${ASSET_ID}`] = {
  ok: true,
  rows: 1,
  offset: 0,
  data: [{
    'id': 15322902,
    'isTraded': true,
    'price': 295,
    'price24Change': 27.155172413793103,
    'priceBefore': 232,
    'unix_time': 1647364343,
  }],
};
module.exports[`${BASE_URL}/asset_search.php?query=${ASSET_ID}`] = {
  data: {
    'assets': [
      {
        'assetId': 15322902,
        'assetName': 'Lamps',
        'decimals': 6,
        'destroyed': false,
        'formattedASALiquidity': '304.846238',
        'formattedAlgoLiquidity': '191431.355567',
        'formattedPrice': '231.008967',
        'hasOrders': true,
        'isTraded': true,
        'price': '231.008967278342',
        'priceChg24Pct': -0.8545204813982838,
        'unitName': 'LAMP',
        'verified': false,
      },
    ],
  },
};
module.exports[`${BASE_URL}/charts2.php?assetId=${ASSET_ID}&chartTime=${CHART_INTERVAL}`] = {
  data: {
    'current_price': '231.008967278342',
    'previous_trade_price': '296.000000000000',
    'last_period_closing_price': '231.008860759494',
    'asset_info': {
      'asset': {
        'created-at-round': 13596306,
        'deleted': false,
        'index': 15322902,
        'params': {
          'clawback': 'PBSSJ2W6FDXVRPT4L4FGHTX2IHY3VREI44SB7VJTVT75UT6ER3CTVD6B74',
          'creator': 'PBSSJ2W6FDXVRPT4L4FGHTX2IHY3VREI44SB7VJTVT75UT6ER3CTVD6B74',
          'decimals': 6,
          'default-frozen': false,
          'freeze': 'PBSSJ2W6FDXVRPT4L4FGHTX2IHY3VREI44SB7VJTVT75UT6ER3CTVD6B74',
          'manager': 'PBSSJ2W6FDXVRPT4L4FGHTX2IHY3VREI44SB7VJTVT75UT6ER3CTVD6B74',
          'name': 'Lamps',
          'name-b64': 'TGFtcHM=',
          'reserve': 'PBSSJ2W6FDXVRPT4L4FGHTX2IHY3VREI44SB7VJTVT75UT6ER3CTVD6B74',
          'total': 100000000000,
          'unit-name': 'LAMP',
          'unit-name-b64': 'TEFNUA==',
        },
      },
    },
    'chart_data': [
      {
        'asaVolume': 0.7142039999999998,
        'algoVolume': 190.27733899999998,
        'low': '231.008319467554',
        'formatted_low': '231.008319',
        'high': '299.000000000000',
        'formatted_high': '299.000000',
        'close': '231.008967278342',
        'formatted_close': '231.008967',
        'open': '298.998045187980',
        'formatted_open': '298.998045',
        'dateTime': '2022-03-15T19:0:00Z',
        'unixTime': 1647370800,
        'date': '2022-03-15',
      },
      {
        'asaVolume': 0.6750880000000001,
        'algoVolume': 182.40653900000007,
        'low': '231.008492569002',
        'formatted_low': '231.008493',
        'high': '298.998151881720',
        'formatted_high': '298.998152',
        'close': '231.008860759494',
        'formatted_close': '231.008861',
        'open': '298.998042356291',
        'formatted_open': '298.998042',
        'dateTime': '2022-03-15T18:0:00Z',
        'unixTime': 1647367200,
        'date': '2022-03-15',
      },
      {
        'asaVolume': 0.6513380000000002,
        'algoVolume': 190.0452300000001,
        'low': '234.899866488652',
        'formatted_low': '234.899866',
        'high': '298.998151881720',
        'formatted_high': '298.998152',
        'close': '236.000000000000',
        'formatted_close': '236.000000',
        'open': '297.899892357374',
        'formatted_open': '297.899892',
        'dateTime': '2022-03-15T17:0:00Z',
        'unixTime': 1647363600,
        'date': '2022-03-15',
      },
      {
        'asaVolume': 0.94272,
        'algoVolume': 276.31086599999986,
        'low': '236.000000000000',
        'formatted_low': '236.000000',
        'high': '299.000000000000',
        'formatted_high': '299.000000',
        'close': '298.998328318288',
        'formatted_close': '298.998328',
        'open': '296.000000000000',
        'formatted_open': '296.000000',
        'dateTime': '2022-03-15T16:0:00Z',
        'unixTime': 1647360000,
        'date': '2022-03-15',
      },
      {
        'asaVolume': 1.8066179999999998,
        'algoVolume': 492.7663159999998,
        'low': '236.000000000000',
        'formatted_low': '236.000000',
        'high': '298.999328633770',
        'formatted_high': '298.999329',
        'close': '298.999300943726',
        'formatted_close': '298.999301',
        'open': '298.999008182494',
        'formatted_open': '298.999008',
        'dateTime': '2022-03-15T15:0:00Z',
        'unixTime': 1647356400,
        'date': '2022-03-15',
      },
      {
        'asaVolume': 2.0884929999999993,
        'algoVolume': 613.3356170000003,
        'low': '236.000000000000',
        'formatted_low': '236.000000',
        'high': '298.999159946237',
        'formatted_high': '298.999160',
        'close': '236.000000000000',
        'formatted_close': '236.000000',
        'open': '295.899584076055',
        'formatted_open': '295.899584',
        'dateTime': '2022-03-15T14:0:00Z',
        'unixTime': 1647352800,
        'date': '2022-03-15',
      },
    ],
    'spread_info': {
      'max_bid': '1801.0000',
      'min_sell': '296.0000',
      'spread': -1505,
    },
  },
};
module.exports[`${BASE_URL}/wallet_assets.php?ownerAddr=${WALLET}`] = {
  'allAssets': [
    {
      'amount': 40075000000,
      'asaInOrder': 0,
      'asaPrice': '27.000000000000',
      'assetId': 69413060,
      'decimals': 6,
      'formattedASAAvailable': '40075',
      'formattedASAInOrder': '0',
      'formattedPrice': '27.000000',
      'formattedTotalASAAmount': '40075',
      'formattedTotalAlgoEquiv': '1082025',
      'name': 'Telluric',
      'unit_name': 'TELLURIC',
    },
    {
      'amount': 13347698823987,
      'asaInOrder': 10000000000,
      'asaPrice': '0.000112345473',
      'assetId': 69410904,
      'decimals': 10,
      'formattedASAAvailable': '1333.7698823987',
      'formattedASAInOrder': '1',
      'formattedPrice': '1.123455',
      'formattedTotalASAAmount': '1334.7698823987',
      'formattedTotalAlgoEquiv': '1499.553898',
      'name': 'Zero',
      'unit_name': 'ZERO',
    },
    {
      'amount': 10000000,
      'asaInOrder': 0,
      'asaPrice': '0.004100000000',
      'assetId': 22847687,
      'decimals': 6,
      'formattedASAAvailable': '10',
      'formattedASAInOrder': '0',
      'formattedPrice': '0.004100',
      'formattedTotalASAAmount': '10',
      'formattedTotalAlgoEquiv': '0.041',
      'name': 'wALGO',
      'unit_name': 'wALGO',
    },
  ],
};

// Wallet Orders
module.exports[`${BASE_URL}/orders.php?ownerAddr=${WALLET}&getAssetInfo=true`] = {
  data: {
    'sellASAOrdersInEscrow': [
      {
        'assetLimitPriceInAlgos': '0.123412345000',
        'asaPrice': '0.123412345000',
        'assetLimitPriceD': 1234123456,
        'assetLimitPriceN': 10000000000,
        'algoAmount': 498000,
        'asaAmount': 10000000000,
        'assetId': 69410904,
        'appId': 22045522,
        'escrowAddress': 'UBIEX7AUCPE5JH2NCMAXTACGCXUE334O6EHERVVKZWKN2HK4UKFTZAQTQM',
        'ownerAddress': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
        'version': 7,
        'minimumExecutionSizeInAlgo': 0,
        'round': 19788126,
        'unix_time': 1644938291,
        'formattedPrice': '1234.123450',
        'formattedASAAmount': '1.0000000000',
        'decimals': 10,
      },
    ],
    'buyASAOrdersInEscrow': [
      {
        'assetLimitPriceInAlgos': '0.000123456000',
        'asaPrice': '0.000123456000',
        'assetLimitPriceD': 1234567,
        'assetLimitPriceN': 10000000000,
        'algoAmount': 1523157,
        'asaAmount': 0,
        'assetId': 69410904,
        'appId': 22045503,
        'escrowAddress': 'DZYMWTNXH5MRYMYTVA7XDFY4UWTMIBFM3FDYPSCD2CN7FNKBKXQ7PDDPVU',
        'ownerAddress': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
        'version': 7,
        'minimumExecutionSizeInAlgo': 0,
        'round': 19787960,
        'unix_time': 1644937588,
        'formattedPrice': '1.234560',
        'formattedASAAmount': '1.2337650661',
        'decimals': 10,
      },
    ],
    'allAssets': [
      {
        'created-at-round': 19626472,
        'deleted': false,
        'index': 69410904,
        'params': {
          'clawback': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
          'creator': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
          'decimals': 10,
          'default-frozen': false,
          'freeze': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
          'manager': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
          'name': 'Zero',
          'name-b64': 'WmVybw==',
          'reserve': 'TJFFNUYWHPPIYDE4DGGYPGHWKGAPJEWP3DGE5THZS3B2M2XIAPQ2WY3X4I',
          'total': 13370000000000,
          'unit-name': 'ZERO',
          'unit-name-b64': 'WkVSTw==',
          'url': 'https://phearzero.com',
          'url-b64': 'aHR0cHM6Ly9waGVhcnplcm8uY29t',
        },
      },
    ],
  },
};

// Explorer URLs
const EXPLORER_BASE_URL = 'https://testnet.algoexplorerapi.io';
const VERIFIED_ASSET = '14704676';
module.exports[`${EXPLORER_BASE_URL}/v1/search/${VERIFIED_ASSET}`] = {
  'blockNumber': 15322902,
  'assetInfo': {
    'assetID': 15322902,
    'assetName': 'Lamps',
    'unitName': 'LAMP',
    'verified': false,
    'destroyed': false,
  },
};