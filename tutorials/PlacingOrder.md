# ℹ Placing an Order 
> 🧰 You can think of {@link AlgodexApi#placeOrder} as a toolbox: it's got everything you need to tackle order execution

## 🪜 Steps

1. ⚗ Create a `new` instance of the {@link AlgodexApi}
2. 🔧 Set a default {@link Wallet} using {@link AlgodexApi#setWallet}
3. 🏗 Generate an {@link Order} compatible object
4. 💸 Pass in the {@link Order} object to {@link AlgodexApi#placeOrder}

# 💱 Order Executions
> 💡 If you are unsure of which execution type to choose input `execution:'both'` and we'll handle the rest 😎

### Details:

The {@link Order} object has an `execution` key that determines how the SDK will handle the {@link Order}.
Each `execution` will interact with the {@tutorial Orderbook} in different ways. Algodex supports the 
following executions:

### Executions:  <center>📥 [Maker](#maker) | 📤 [Taker](#taker) | 🔁 [Both](#both)</center>

# <a name="maker"></a> 📥 Maker Order

A {@tutorial MakerOrder} will always be placed into the {@tutorial Orderbook}. They can be either Buy or Sell order types.

### Buy Order
```javascript
//Buy Example:
const res = await api.placeOrder({
'asset': {
  'id': 15322902,
  'decimals': 6,
},
'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
'price': 3.22, // Limit price for the asset
'amount': 1, // Amount willing to purchase (The total amount sent will be price * amount)
'execution': 'maker',
'type': 'buy',
});
```

### Sell Order
```javascript
// Sell Example:
const res = await api.placeOrder({
  'asset': {
    'id': 15322902,
    'decimals': 6,
  },
  'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
  'price': 80000, // Limit price for the asset to sell
  'amount': 1, // Amount of the asset for sale
  'execution': 'maker',
  'type': 'sell',
});
```

# <a name="taker"></a> 📤 Taker Order

A {@tutorial TakerOrder} will always execute existing orders in the {@tutorial Orderbook}. They can be either Buy or Sell order types.

### Buy Order
```javascript
// Buy Example
const res = await api.placeOrder({
  'asset': {
    'id': 15322902,
    'decimals': 6,
  },
  'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
  'price': 3.22,
  'amount': 1,
  'execution': 'taker',
  'type': 'buy',
});
```
### Sell Order
```javascript
// Sell Example
const res = await api.placeOrder({
  'asset': {
    'id': 15322902,
    'decimals': 6,
  },
  'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
  'price': 80000,
  'amount': 1,
  'execution': 'taker',
  'type': 'sell',
});
```

# <a name="both"></a> 🔁 Maker/Taker Order

Maker/Taker will first check the {@tutorial Orderbook} for existing orders that match
the current order.

### Buy Order
```javascript
  const res = await api.placeOrder({
    'asset': {
      'id': 15322902,
      'decimals': 6,
    },
    'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
    'price': 3.22,
    'amount': 1,
    'execution': 'both',
    'type': 'buy',
  });
```
### Sell Order
```javascript
  const res = await api.placeOrder({
    'asset': {
      'id': 15322902,
      'decimals': 6,
    },
    'address': 'WYWRYK42XADLY3O62N52BOLT27DMPRA3WNBT2OBRT65N6OEZQWD4OSH6PI',
    'price': 80000,
    'amount': 1,
    'execution': 'both',
    'type': 'sell',
  });
```

# 🧮 Advanced

### 🔨🔩🪓 &nbsp;&nbsp; There are multiple ways to place an order using our SDK. &nbsp;&nbsp; 🔧🪛⛏

&nbsp;&nbsp; 🎓 &nbsp;&nbsp; If you are curious about the internal processes of placing an order and how they relate to the different execution types, the [Structure Module]{@link module:order/structure} is a great place to start

👷‍♀️👷 &nbsp;&nbsp;Some people find it clunky to lug around a toolbox if they only need one or two tools

👷‍♀️👷 &nbsp;&nbsp;If that sounds like you, we recommend checking out [Buy]{@link module:txns/buy} & [Sell]{@link module:txns/sell} modules to get a better sense of what methods fit your use case




