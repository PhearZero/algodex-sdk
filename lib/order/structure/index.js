/** @module order/structures **/
const structure = require('./structure');

structure.getTakerOrderInformation = require('./withTakerOrderInformation');
structure.getStructuredTakerTxns = require('./withCutTakerTxns');
structure.withMakerTxns = require('./withMakerTxns');

module.exports = structure;
