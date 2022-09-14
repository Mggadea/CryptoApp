import React, {useState} from 'react';

const BalanceContext = React.createContext({});

export function BalanceContextProvider({children}) {
  const [balance, setBalance] = useState(10000);
  const [balanceBTC, setBalanceBTC] = useState(0);
  const [balanceETH, setBalanceETH] = useState(0);
  const [balanceUSDC, setBalanceUSDC] = useState(0);



  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance,
        balanceBTC,
        setBalanceBTC,
        balanceETH,
        setBalanceETH,
        balanceUSDC,
        setBalanceUSDC,
      }}>
      {children}
    </BalanceContext.Provider>
  );
}

export default BalanceContext;
