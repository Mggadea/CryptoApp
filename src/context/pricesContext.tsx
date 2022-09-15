import React, {useEffect, useState} from 'react';
import {getPriceBTC, getPriceETH, getPriceUSDC} from '@services/prices';

const PricesContext = React.createContext({});

export function PricesContextProvider({children}) {
  const [priceBtc, setPriceBtc] = useState(0);
  const [priceEth, setPriceEth] = useState(0);
  const [priceUsdc, setPriceUsdc] = useState(0);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const PrecioBTC = async () => {
      try {
        const res = await getPriceBTC();
        setPriceBtc(res.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    const precioETH = async () => {
      try {
        const res = await getPriceETH();
        setPriceEth(res.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    const precioUSDC = async () => {
      try {
        const res = await getPriceUSDC();
        setPriceUsdc(res.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    PrecioBTC();
    precioETH();
    precioUSDC();
  }, []);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <PricesContext.Provider
      value={{
        handleRefresh,
        priceBtc,
        priceEth,
        priceUsdc,
      }}>
      {children}
    </PricesContext.Provider>
  );
}

export default PricesContext;
