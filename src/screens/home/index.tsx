import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import MarketItem from '@components/marketItem';
import {GobalStyles} from '../../assets/styles/globalStyles';
import PricesContext from '../../context/pricesContext';
import BalanceContext from '../../context/balanceContext';

const HomeScreen = () => {
  const {handleRefresh, priceBtc, priceEth, priceUsdc} = useContext(PricesContext);
  const {balance} = useContext(BalanceContext);
  const data = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: priceBtc,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: priceEth,
    },
    {
      symbol: 'USDC',
      name: 'Usdc',
      price: priceUsdc,
    },
  ];

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <SafeAreaView style={GobalStyles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#6a6a6a', fontSize: 18}}>Account balance</Text>

        <Text style={[GobalStyles.title, {fontSize: 32}]}>${balance}</Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={GobalStyles.title}>Market</Text>
        {data.map((item, index) => (
          <MarketItem
            key={index}
            symbol={item.symbol}
            name={item.name}
            price={item.price}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
