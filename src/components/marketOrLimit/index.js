import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MarketOrLimit = ({screen, operation, token}) => {
  const navigation = useNavigation();

  const handlePressMarket = () => {
    if (screen === 'Limit') {
      navigation.goBack();
    }
  };

  const handlePressLimit = () => {
    if (screen === 'Market') {
      navigation.navigate('Limit', {operationType: operation, token: token});
    }
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity
        onPress={() => handlePressMarket()}
        style={styles(screen === 'Market').container}>
        <Text style={styles().text}>Market</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePressLimit()}
        style={styles(screen === 'Limit').container}>
        <Text style={styles().text}>Limit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MarketOrLimit;

const styles = (selected: undefined) =>
  StyleSheet.create({
    container: {
      borderColor: selected ? '#06f' : '#ccc',
      borderBottomWidth: 3,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
