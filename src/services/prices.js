import axios from 'axios';

const BASE_URL = 'https://api.binance.com/api/v3/ticker/price';

export const getPriceBTC = async () => {
  try {
    const response = await axios.get(BASE_URL + '?symbol=BTCUSDC');
    return response;
  } catch {
    console.log(console.error());
  }
};

export const getPriceETH = async () => {
  try {
    const response = await axios.get(BASE_URL + '?symbol=ETHUSDC');
    return response;
  } catch {
    console.log(console.error());
  }
};
export const getPriceUSDC = async () => {
  try {
    const response = await axios.get(BASE_URL + '?symbol=USDCUSDT');
    return response;
  } catch {
    console.log(console.error());
  }
};
