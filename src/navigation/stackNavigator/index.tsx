import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from '../bottomTab';
import {Trade, Convert} from '@screens';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={BottomTab} />

        <Stack.Screen
          name="Trade"
          options={{headerShown: true}}
          component={Trade}
        />

        <Stack.Screen
          name="Convert"
          options={{headerShown: true}}
          component={Convert}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigator;
