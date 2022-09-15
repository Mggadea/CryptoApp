import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GobalStyles} from '@styles';

const OrderBook = ({orderBook}) => {

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
              <Text>Amount</Text>
              <Text>Total in usd</Text>
            </View>
            {orderBook
              ?.filter(val => {
                if (val.operation === 'sell') {
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
              <Text>Amount</Text>
              <Text>Total in usd</Text>
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
