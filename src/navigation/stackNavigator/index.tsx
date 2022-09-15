import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from '../bottomTab';
import {Trade, Convert, Limit} from '@screens';

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
          options={{headerShown: true, headerTitle: ' '}}
          component={Trade}
        />

        <Stack.Screen
          name="Convert"
          options={{headerShown: true, headerTitle: ' '}}
          component={Convert}
        />
        <Stack.Screen
          name="Limit"
          options={{headerShown: true, headerTitle: ' '}}
          component={Limit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigator;
