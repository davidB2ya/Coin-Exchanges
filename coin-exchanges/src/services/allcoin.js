import axios from 'axios';

export const API = 'https://api.coinlore.net/api/tickers/';

export const fetchData = async query => {
    const url = `${API}?start=${query}&limit=20`;

    return await axios.get(url);
};

fetchData('0');

