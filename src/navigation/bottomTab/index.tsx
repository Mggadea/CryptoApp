import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Wallet} from '@screens';
import { Image } from 'react-native';



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Inicio" 
       options={{
        tabBarIcon: () => (
        <Image source={require('../../assets/icons/Home-icon.png')} 
        style={{width: 20, height: 20}} />)
    }}
      component={HomeScreen} />
      <Tab.Screen name="Wallet"
       options={{
        tabBarIcon: () => (
        <Image source={require('../../assets/icons/Wallet-icon.png')} 
        style={{width: 20, height: 20}} />)
    }}
      component={Wallet} />

    </Tab.Navigator>
  );
};

export default BottomTabs;
