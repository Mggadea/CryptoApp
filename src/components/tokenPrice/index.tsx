import { StyleSheet, Text, View } from 'react-native'
import IconSymbol from '../iconSymbol'
import React from 'react'
import {GobalStyles} from '@styles';



const TokenPrice = ({token, price}) => {

  return (
    <View style={[styles.row, styles.container]}>
    <View style={styles.row}>
        <IconSymbol symbol={token} />
        <Text style={[GobalStyles.title, {marginLeft:10}]}>{token}</Text>
      </View>
      <Text style={GobalStyles.title}>$ {Number(price).toFixed(2)}</Text>
    </View>

  )
}

export default TokenPrice

const styles = StyleSheet.create({
  container:{
    width:'100%',
  },
row:{
    flexDirection:'row', 
    justifyContent:'space-between'
}
})