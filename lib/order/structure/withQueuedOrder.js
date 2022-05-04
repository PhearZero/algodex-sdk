/**
 * ## ✉ composeQueuedOrderWithTakerInfo
 *
 * @param {Object} compileObj Compile object
 * @param {Object} takerOrderBalance Object Of Order And Wallet amounts
 * @param {Object} queuedOrder Object Of Order And Wallet amounts
 *
 * @return {Object} Object containing properly formatted composition of cutQueuedOrder and takerBalance for constructing
 * single transList
 * @memberOf module:order/structures
*/
function withQueuedOrder(order, queuedOrder) {
  const {takerOrderBalance} = order;
  if (takerOrderBalance.isExecuteASA) {
    const cutQueuedOrderComposedWithTakerInfo = {
      ...order,
      address: order.address,
      client: order.client,
      contract: {
        ...order.contract,
        escrow: queuedOrder.escrowAddr,
        creator: queuedOrder.orderCreatorAddr,
        entry: queuedOrder.orderEntry,
        params: order.params,
        // algoAmountSending: takerOrderBalance.algoTradeAmount, //Buying asset
        amount: takerOrderBalance.escrowASATradeAmount,

      },


      price: queuedOrder.price, // want to use the price of the escrow order and not the limit price
      // asset: {
      //   id: order.asset.id,
      // }, //I don't think we need this
      shouldClose: queuedOrder.forceShouldClose,
      takerIsOptedIn: takerOrderBalance.takerIsOptedIn,
      orderBookEscrowEntry: queuedOrder,
    };


    return cutQueuedOrderComposedWithTakerInfo;
  } else {
    const cutQueuedOrderComposedWithTakerInfo = {
      ...order,
      address: order.address,
      client: order.client,

      contract: {
        ...order.contract,
        escrow: queuedOrder.escrowAddr,
        creator: queuedOrder.orderCreatorAddr,
        entry: queuedOrder.orderEntry, // want to use the entry of the escrow order and not the user entry
        params: order.params,
        // algoAmountSending: takerOrderBalance.algoTradeAmount, //Buying asset
        amount: takerOrderBalance.asaAmountSending,

      },

      price: queuedOrder.price, // want to use the price of the escrow order and not the limit price

      appId: order.appId,
      shouldClose: queuedOrder.forceShouldClose,
      takerIsOptedIn: takerOrderBalance.takerIsOptedIn,
      orderBookEscrowEntry: queuedOrder,
    };
    return cutQueuedOrderComposedWithTakerInfo;
  }
}

module.exports = withQueuedOrder;