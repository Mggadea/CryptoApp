import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Wallet} from '@screens';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={Wallet} />

    </Tab.Navigator>
  );
};

export default BottomTabs;
