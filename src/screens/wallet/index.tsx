import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import MarketItem from '@components/marketItem';
import {GobalStyles} from '@styles';
import { BalanceContext} from '@context';

const Wallet = () => {
  const {balanceBTC, balanceETH, balanceUSDC} = useContext(BalanceContext);

  const data = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: balanceBTC,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: balanceETH,
    },
    {
      symbol: 'USDC',
      name: 'Usdc',
      price: balanceUSDC,
    },
  ];
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <Text style={GobalStyles.title}>Wallet</Text>
        {data.map((item, index) => (
          <MarketItem
            wallet
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

export default Wallet;

const styles = StyleSheet.create({});
