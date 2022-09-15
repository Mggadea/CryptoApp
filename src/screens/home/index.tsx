import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {MarketItem, OrderBook} from '@components';
import {GobalStyles} from '@styles';
import {PricesContext, BalanceContext} from '@context';


const HomeScreen = () => {
  const {handleRefresh, priceBtc, priceEth, priceUsdc} =
    useContext(PricesContext);
  const {balance, orderBook} = useContext(BalanceContext);
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

  const ListaOrdenad = orderBook.sort((a, b) => b.total - a.total);

  return (
    <SafeAreaView style={GobalStyles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#6a6a6a', fontSize: 18}}>Account balance</Text>

        <Text style={[GobalStyles.title, {fontSize: 32}]}>
          ${balance.toLocaleString('es', 'EU')}
        </Text>
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
      <OrderBook orderBook={ListaOrdenad} />
    </SafeAreaView>
  );
};

export default HomeScreen;
