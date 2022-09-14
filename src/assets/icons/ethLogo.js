import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EthLogo = () => {
  return (
    <Image
      source={require('./ETH_LOGO.png')}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default EthLogo;

const styles = StyleSheet.create({});
