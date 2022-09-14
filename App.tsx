import React from 'react';
import {StackNavigator} from './src/navigation';
import {PricesContextProvider} from './src/context/pricesContext';
import { BalanceContextProvider } from './src/context/balanceContext';

const App = () => {
  return (
    <BalanceContextProvider>
    <PricesContextProvider>
      <StackNavigator />
    </PricesContextProvider>
    </BalanceContextProvider>
  );
};

export default App;
