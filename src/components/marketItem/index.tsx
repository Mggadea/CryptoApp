/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSymbol from '../iconSymbol';
import {useNavigation} from '@react-navigation/native';

interface Props {
  symbol: string;
  name: string;
  price: number;
}

const MarketItem = ({symbol, price, name}: Props) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Trade',{
      token: symbol,
    });
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.item}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconSymbol symbol={symbol} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold'}}>{symbol}</Text>
          <Text style={{fontSize: 14}}>{name}</Text>
        </View>
      </View>
      {price != null ? (
        <Text style={styles.price}>$ {price} </Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default MarketItem;

const styles = StyleSheet.create({
  item: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
  },
});
