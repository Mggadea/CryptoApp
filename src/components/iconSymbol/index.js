import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import BtcLogo from '../../assets/icons/btcLogo';
import EthLogo from '../../assets/icons/ethLogo';
import UsdcLogo from '../../assets/icons/usdcLogo';

/**
 * @param  {string} symbol el simbolo de la moneda
 * @returns SVG de la moneda segun su simbolo, devuelve el simbolo
 * en letras en caso de no tener svg
 */
const getSvgCurrency = symbol => {
  if (symbol) {
    if (symbol) {
      switch (symbol) {
        case 'BTC':
          return <BtcLogo />;
        case 'USDC':
          return <UsdcLogo />;
        case 'ETH':
          return <EthLogo />;
        default:
          return <Text>{symbol}</Text>;
      }
    }
  }
  return <Text>{'-'}</Text>;
};

/**
 * Busca el svg del simbolo que se pase
 * @param  {string} symbol nombre del simbolo
 * @param {number} size
 * @param {number} borderRadius
 * @returns icono
 */
function IconSymbol({symbol = '', size = 30, borderRadius = 50}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
          overflow: 'hidden',
        },
      ]}>
      {getSvgCurrency(symbol)}
    </View>
  );
}

IconSymbol.propTypes = {
  symbol: PropTypes.string,
  size: PropTypes.number,
  borderRadius: PropTypes.number,
};

export default IconSymbol;
