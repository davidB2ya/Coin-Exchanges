import axios from "axios";

export const getCoins = (start) =>{
    const data = axios.get(`https://api.coinlore.net/api/tickers/?start=${start}&limit=20`).then((response) => response.data.data);
    return data;
}
export const getCoinsAll = (search) => {
    const result = axios.get(`https://api.coinlore.net/api/tickers`).then((response) => response.data.data);                                                                                        
    
    const input = search.toLowerCase().trim()
    const filter = result.filter(item => item.nameid.toLowerCase().startsWith(input))

    return filter;   
};