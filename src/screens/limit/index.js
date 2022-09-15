import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

import {GobalStyles} from '../../assets/styles/globalStyles';
import {Button, MarketOrLimit} from '@components';
import BalanceContext from '@context/balanceContext';
import {useRoute} from '@react-navigation/native';

const Limit = () => {
  const {params} = useRoute();
  const {operationType, token} = params;

  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [recive, setRecive] = useState(0);
  const [available, setAvailable] = useState(0);

  const {
    balance,
    setBalance,
    balanceBTC,
    balanceETH,
    balanceUSDC,
    setBalanceBTC,
    setBalanceETH,
    setBalanceUSDC,
  } = useContext(BalanceContext);

  const valueToRecieve = price * amount;

  useEffect(() => {
    if (operationType === 'Buy') {
      setAvailable(balance);
    }
    if (operationType === 'Sell') {
      switch (token) {
        case 'BTC':
          setAvailable(balanceBTC);

          break;
        case 'ETH':
          setAvailable(balanceETH);

          break;
        case 'USDC':
          setAvailable(balanceUSDC);
          break;
      }
    }

    setRecive(valueToRecieve);
  }, [price, amount]);

  const handlePress = () => {
    if (amount > available) {
      Alert.alert('The amount is greater than your balance');
    }
    if (operationType === 'Buy') {
      setBalance(balance - recive);
      switch (token) {
        case 'BTC':
          setBalanceBTC(balanceBTC + amount);
          break;
        case 'ETH':
          setBalanceETH(balanceETH + amount);
          break;
        case 'USDC':
          setBalanceUSDC(balanceUSDC + amount);
          break;
      }
      Alert.alert('Successfull operation');
    }
  };

  return (
    <View style={styles.container}>
      <MarketOrLimit screen="Limit" />
      <View>
        <View>
          <Text style={GobalStyles.inputLabel}>Price</Text>
          <TextInput
            autoFocus
            keyboardType="numeric"
            style={GobalStyles.input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text style={GobalStyles.inputLabel}>Amount in {token}</Text>
          <TextInput
            keyboardType="numeric"
            style={GobalStyles.input}
            onChangeText={setAmount}
            value={amount}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text> Available:</Text>
            <Text>
              {available + ' '}
              {operationType === 'Sell' ? token : 'USD'}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        You will{' '}
        {operationType === 'Sell'
          ? 'recieve' + ' ' + recive + token
          : 'spend' + ' ' + recive + ' ' + 'USD'}
      </Text>
      <Button onPress={handlePress} text={operationType} />
    </View>
  );
};

export default Limit;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 40,
    marginBottom: 300,
  },
  text: {
    textAlign: 'center',
  },
});
