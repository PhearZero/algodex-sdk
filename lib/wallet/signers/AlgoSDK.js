const {groupBy} = require('../../functions/base');
const algosdk = require('algosdk');
module.exports = (outerTxns, sk) => {
  const groups = groupBy(outerTxns, 'groupNum');
  const numberOfGroups = Object.keys(groups);
  const groupedGroups = numberOfGroups.map((group) => {
    const allTxFormatted = (groups[group].map((txn) => {
      return txn;
    }));
    algosdk.assignGroupID(allTxFormatted.map((toSign) => toSign.unsignedTxn));
    return allTxFormatted;
  },
  );

  const flatGroups = groupedGroups.flat();

  const signedTransactions = flatGroups.map((txn) => {
    return txn.lsig != null?
            algosdk.signLogicSigTransaction(txn.unsignedTxn, txn.lsig) :
            algosdk.signTransaction(txn.unsignedTxn, sk);
  });

  return outerTxns.map((txnObj, i) =>{
    txnObj.signedTxn = signedTransactions[i];
    return txnObj;
  });
};