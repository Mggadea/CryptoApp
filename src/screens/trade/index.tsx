/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {GobalStyles} from '../../assets/styles/globalStyles';
import {Button, TokenPrice} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import PricesContext from '../../context/pricesContext';
import useTokens from '../../hooks/useTokens';

const Trade = () => {
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);
  const navigation = useNavigation();
  const {params} = useRoute();

  const [selectedToken, setSelectedToken] = useState('');
  const [price, setPrice] = useState(0);

  const {token} = params;

  const wea = useTokens(token);

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
    if (selectedToken === 'BTC') {
      setPrice(priceBtc);
    }
    if (selectedToken === 'ETH') {
      setPrice(priceEth);
    }
    if (selectedToken === 'USDC') {
      setPrice(priceUsdc);
    }
  };

  useEffect(() => {
    setSelectedToken(token);
    prices();
    console.log('sda', wea);
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
      <Text style={GobalStyles.title}>OrderBook</Text>

      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingVertical: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={[styles.buttonContainer, {borderRightWidth: 1}]}>
            <Text
              style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
              Sell orders
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text>Amunt</Text>
              <Text>Price</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text>0.12312312</Text>
              <Text>20000</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text
              style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
              Buy orders
            </Text>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
              }}>
              <Text>Amunt</Text>
              <Text>Price</Text>
            </View>
          </View>
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
