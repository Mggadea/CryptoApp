import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {GobalStyles} from '../../assets/styles/globalStyles';
import Button from '../../components/button/button';
import {useNavigation, useRoute} from '@react-navigation/native';
import PricesContext from '../../context/pricesContext';
import IconSymbol from '../../components/iconSymbol';

const Trade = () => {
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);
  const navigation = useNavigation();
  const {params} = useRoute();

  const [selectedToken, setSelectedToken] = useState('BTC');
  const [price, setPrice] = useState(0);

  const {token} = params;

  const prices = () => {
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
      <View style={styles.buttonsContainer}>
      <View style={{flexDirection:'row'}}>
          <IconSymbol symbol={token} />
          <Text style={[GobalStyles.title, {marginLeft:10}]}>{selectedToken}</Text>
        </View>
        <Text style={GobalStyles.title}>$ {Number(price).toFixed(2)}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button text={'Sell'} color="#F03A47" onPress={handleSell} />
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Buy'} color="#00CC66" onPress={handleBuy} />
        </View>
      </View>

      <Text style={GobalStyles.title}>OrderBook</Text>
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '45%',
  },
});
