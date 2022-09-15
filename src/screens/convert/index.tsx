import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Button, MarketOrLimit, TokenPrice} from '@components';
import {BalanceContext, PricesContext} from '@context';
import {GobalStyles} from '@styles';


import {useRoute} from '@react-navigation/native';

const Convert: FC = () => {
  const {
    handleBuy,
    handleSell,
    balance,
    balanceBTC,
    balanceETH,
    balanceUSDC,

  } = useContext(BalanceContext);
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);

  const {params} = useRoute();

  const {operationType, token} = params;

  const [amount, onChangeamount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [available, setAvailable] = useState(0);

  const handleOnPress = () => {
    if (operationType === 'Buy') {
      handleBuy(tokenPrice, amount, true, token);
    }
    if (operationType === 'Sell') {
      handleSell(tokenPrice, amount, true, token);
    }
  };

  useEffect(() => {
    switch (token) {
      case 'BTC':
        setTokenPrice(priceBtc);
        setAvailable(balanceBTC);

        break;
      case 'ETH':
        setTokenPrice(priceEth);
        setAvailable(balanceETH);

        break;
      case 'USDC':
        setTokenPrice(priceUsdc);
        setAvailable(balanceUSDC);
        break;
    }
  }, [
    balanceBTC,
    balanceETH,
    balanceUSDC,
    priceBtc,
    priceEth,
    priceUsdc,
    token,
  ]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <MarketOrLimit operation={operationType} token={token} screen="Market" />
      <TokenPrice price={tokenPrice} token={token} />

      <View>
        <Text style={GobalStyles.inputLabel}>
          Set amount to {operationType} in{' '}
          {operationType === 'Buy' ? 'USD' : token}{' '}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            keyboardType="numeric"
            style={GobalStyles.input}
            onChangeText={onChangeamount}
            value={amount}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 10}]}>
          <Text>Available:</Text>
          {operationType === 'Sell' ? (
            <Text>
              {available} {token}
            </Text>
          ) : (
            <Text>$ {balance}</Text>
          )}
        </View>
      </View>
      <Text style={styles.textRecieve}>
        You will recieve {''}
        {operationType === 'Sell'
          ? amount * tokenPrice + ' ' + 'USD'
          : amount / tokenPrice + ' ' + token}
      </Text>

      <Button onPress={handleOnPress} text={operationType} />
    </KeyboardAvoidingView>
  );
};

export default Convert;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 330,
    paddingVertical: 40,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '90%',
    height: 50,
  },

  textRecieve: {
    color: '#6a6a6a',
    textAlign: 'center',
  },
});
