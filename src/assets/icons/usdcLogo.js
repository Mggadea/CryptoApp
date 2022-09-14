import {View, Text, Image} from 'react-native';
import React from 'react';

const UsdcLogo = () => {
  return (
    <Image
      source={require('./USDC_LOGO.png')}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default UsdcLogo;
