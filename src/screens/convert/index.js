import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import Button from '../../components/button/button';
import {useRoute} from '@react-navigation/native';
import BalanceContext from '../../context/balanceContext';
import PricesContext from '../../context/pricesContext';
import {GobalStyles} from '../../assets/styles/globalStyles';

const Convert: FC = () => {
  const {
    balance,
    setBalance,
    balanceBTC,
    setBalanceBTC,
    setBalanceETH,
    setBalanceUSDC,
  } = useContext(BalanceContext);
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);

  const {params} = useRoute();

  const {operationType, token} = params;

  const handleOnPress = () => {
    if (operationType === 'Buy') {
      setBalance(balance - number);
      switch (token) {
        case 'BTC':
          setBalanceBTC(number / tokenPrice);
          break;
        case 'ETH':
          setBalanceETH(number / tokenPrice);
          break;
        case 'BTC':
          setBalanceUSDC(number / tokenPrice);
          break;
      }
    }
  };

  useEffect(() => {
    switch (token) {
      case 'BTC':
        setTokenPrice(priceBtc);
        break;
      case 'ETH':
        setTokenPrice(priceEth);
        break;
      case 'USDC':
        setTokenPrice(priceUsdc);
        break;
    }
  }, []);

  const [number, onChangeNumber] = useState(0);
  const [tokenPrice, setTokenPrice] = useState();

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={GobalStyles.title}>{Number(tokenPrice).toFixed(2)}</Text>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            keyboardType="numeric"
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
          {operationType === 'Sell' && <Text>{token}</Text>}
        </View>
        <View style={[styles.inputContainer, {marginTop: 10}]}>
          <Text>Available:</Text>
          {operationType === 'Sell' ? (
            <Text>10000 {token}</Text>
          ) : (
            <Text>$ {balance}</Text>
          )}
        </View>
      </View>
      <Text style={styles.textRecieve}>
        {' '}
        You will recieve {number / tokenPrice}{' '}
        {operationType === 'Sell' ? 'USD' : token}
      </Text>
      <Button onPress={handleOnPress} text={operationType} />
    </KeyboardAvoidingView>
  );
};

export default Convert;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
    marginBottom: 330,
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
