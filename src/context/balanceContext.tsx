import React, {useState} from 'react';
import {Alert} from 'react-native';

const BalanceContext = React.createContext({});

interface orderProps {
  amount: number;
  price: number;
  isBuy: boolean;
}

export function BalanceContextProvider({children}) {
  const [balance, setBalance] = useState(100000);
  const [balanceBTC, setBalanceBTC] = useState(0);
  const [balanceETH, setBalanceETH] = useState(0);
  const [balanceUSDC, setBalanceUSDC] = useState(0);

  const [orderBook, setOrderBook] = useState([]);

  const buyToken = (amount, price, token) => {
    setBalance(balance - amount);
    switch (token) {
      case 'BTC':
        setBalanceBTC(amount / price);
        break;
      case 'ETH':
        setBalanceETH(amount / price);
        break;
      case 'USDC':
        setBalanceUSDC(amount / price);
        break;
    }
    Alert.alert('successful purchase');
  };

  const handleAdd = (price, amount, token, operation, id) => {
    const item = {
      id: id,
      price: price,
      amount: amount,
      total: price * amount,
      token: token,
      operation: operation,
    };

    const list = [...orderBook, item];
    setOrderBook(list);
  };

  const handleRemove = id => {
    setOrderBook(items => items.filter(item => item.id !== id));
  };

  // amount cantidad a comprar en dolares
  const handleBuy = (price, amount, market, token, total) => {
    if (total > balance) {
      Alert.alert('The total is bigger than your balance');
      return;
    }
    if (market && !isNaN(amount)) {
      if (amount > balance) {
        Alert.alert('The amount is bigger than your balance');
        return;
      } else if (amount == '0') {
        Alert.alert('The amount must  bigger than 0');
        return;
      }
      buyToken(amount, price, token);
    }

    if (!market) {
      const total = amount * price;
      if (total > balance) {
        Alert.alert('The total is bigger than your balance');
        return;
      }
      if (price == 0) {
        Alert.alert('Price must be bigger than 0');
        return;
      }
      if (amount == 0) {
        Alert.alert('The amount must bigger than 0');
        return;
      } else {
        Alert.alert('Successful order');
        const id = +new Date();
        handleAdd(price, amount, token, 'buy', id, total);
        setTimeout(() => {
          buyToken(total, price, token, id);
          handleRemove(id);
        }, 60000);
      }
    }
  };
  // amount cantidad a comprar en btc
  const handleSell = (price, amount, market, token) => {
    const recive = amount * price;
    const timeout = market ? 0 : 60000;
    const id = +new Date();

    if (amount <= 0) {
      Alert.alert('Amount must be bigger than 0');
      return;
    }
    if (amount > 0) {
      console.log(Number(amount) > Number(balance));
      switch (token) {
        case 'BTC':
          if (amount <= balanceBTC) {
            if (market === false) {
              Alert.alert('Successful order');
              handleAdd(price, amount, token, 'sell', id);
            }
            setTimeout(() => {
              setBalanceBTC(balanceBTC - amount);
              setBalance(balance + recive);
              handleRemove(id)
              Alert.alert('successful sale');

            }, timeout);
          } else {
            Alert.alert('Amount is bigger than balance');
          }

          break;
        case 'ETH':
          if (amount <= balanceETH) {
            if (market === false) {
              Alert.alert('Successful order');
              handleAdd(price, amount, token, 'sell', id);
            }
            setTimeout(() => {
              setBalanceETH(balanceETH - amount);
              setBalance(balance + recive);
              handleRemove(id)
              Alert.alert('successful sale');
            }, timeout);
          } else {
            Alert.alert('Amount is bigger than balance');
          }
          break;

        case 'USDC':
          if (amount <= balanceUSDC) {
            if (market === false) {
              Alert.alert('Successful order');
              handleAdd(price, amount, token, 'sell', id);
            }
            setTimeout(() => {
              setBalanceUSDC(balanceUSDC - amount);
              setBalance(balance + recive);
              handleRemove(id)
              Alert.alert('successful sale');
            }, timeout);
          } else {
            Alert.alert('Amount is bigger than balance');
          }
          break;
      }
    }
  };

  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance,
        balanceBTC,
        setBalanceBTC,
        balanceETH,
        setBalanceETH,
        balanceUSDC,
        setBalanceUSDC,
        orderBook,
        handleBuy,
        handleSell,
      }}>
      {children}
    </BalanceContext.Provider>
  );
}

export default BalanceContext;
