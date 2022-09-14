import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BtcLogo = () => {
  return (
    <Image
      source={require('./BTC_LOGO.png')}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default BtcLogo;

const styles = StyleSheet.create({});
