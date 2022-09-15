/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {GobalStyles} from '../../assets/styles/globalStyles';
import {Button, TokenPrice} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import PricesContext from '../../context/pricesContext';
import {BalanceContext} from '../../context';

const Trade = () => {
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);

  const {orderBook} = useContext(BalanceContext);

  const navigation = useNavigation();
  const {params} = useRoute();

  const [selectedToken, setSelectedToken] = useState('');
  const [price, setPrice] = useState(0);

  const {token} = params;

  const prices = () => {
    switch (selectedToken) {
      case 'BTC':
        setPrice(priceBtc);
        break;
      case 'ETH':
        setPrice(priceEth);
        break;
      case 'USDC':
        setPrice(priceUsdc);
        break;
    }
  };

  useEffect(() => {
    switch (token) {
      case 'BTC':
        setPrice(priceBtc);
        break;
      case 'ETH':
        setPrice(priceEth);
        break;
      case 'USDC':
        setPrice(priceUsdc);
        break;
    }
  }, [
    priceBtc,
    priceEth,
    priceUsdc,
    token,
  ]);

  useEffect(() => {
    setSelectedToken(token);
    prices();
    console.log('trade', orderBook);
  }, []);

  const handleBuy = () => {
    navigation.navigate('Convert', {
      operationType: 'Buy',
      token: selectedToken,
    });
  };
  const handleSell = () => {
    navigation.navigate('Convert', {
      operationType: 'Sell',
      token: selectedToken,
    });
  };
  return (
    <View style={GobalStyles.container}>
      <TokenPrice token={selectedToken} price={price} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button text={'Sell'} color="#F03A47" onPress={handleSell} />
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Buy'} color="#00CC66" onPress={handleBuy} />
        </View>
      </View>
  
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '45%',
  },
});
