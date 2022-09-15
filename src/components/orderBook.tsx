import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GobalStyles} from '../assets/styles/globalStyles';


const OrderBook = ({orderBook}) => {
  const Item = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Text>{item.id}</Text>

      <Text>
        {item.amount} {item.token}
      </Text>
    </View>
  );
  return (
    <View style={styles().container}>
      <Text style={GobalStyles.title}>Order book</Text>

      <View style={GobalStyles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={[styles().buttonContainer]}>
            <Text
              style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
              Sell orders
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text>Amunt</Text>
              <Text>Price</Text>
            </View>
            {orderBook
              ?.filter(val => {
                if (val.operation === 'sell') {
                  return val;
                }
              })
              .map((item, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text>
                    {item.amount} {item.token}
                  </Text>
                  <Text>{item.price}</Text>
                </View>
              ))}
          </View>
          <View style={styles().buttonContainer}>
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
            {orderBook
              ?.filter(val => {
                if (val.operation === 'buy') {
                  return val;
                }
              })
              .map((item, index) => (
                <View key={index} style={styles().itemContainer}>
                  <Text style={styles(item.operation).price}>{item.price}</Text>

                  <Text>
                    {item.amount} {item.token}
                  </Text>
                </View>
              ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderBook;

const styles = operation =>
  StyleSheet.create({
    container: {
      marginHorizontal: 20,
    },
    itemContainer: {
      height: 50,
      borderBottomWidth: 1,
      borderColor: '#6a6a6a',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    price: {
      color: operation === 'sell' ? 'red' : 'green',
      fontWeight: 'bold',
    },
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
