import { fetchData, API } from './services/allcoin.js'
import axios from 'axios';

jest.mock('axios');

describe('Fetch Data', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: [
        {
          "id": "90",
          "symbol": "BTC",
          "name": "Bitcoin",
          "nameid": "bitcoin",
          "rank": 1,
          "price_usd": "38584.80",
          "percent_change_24h": "1.62",
          "percent_change_1h": "-1.72",
          "percent_change_7d": "-11.12",
          "price_btc": "1.00",
          "market_cap_usd": "732058842807.09",
          "volume24": 21718831043.51643,
          "volume24a": 19328884692.676678,
          "csupply": "18972727.00",
          "tsupply": "18972727",
          "msupply": "21000000"
        },
        {
          "id": "80",
          "symbol": "ETH",
          "name": "Ethereum",
          "nameid": "ethereum",
          "rank": 2,
          "price_usd": "2567.20",
          "percent_change_24h": "1.65",
          "percent_change_1h": "-1.99",
          "percent_change_7d": "-12.09",
          "price_btc": "0.066529",
          "market_cap_usd": "307548455966.00",
          "volume24": 19438585840.895306,
          "volume24a": 17498030627.578495,
          "csupply": "119799233.00",
          "tsupply": "119799233",
          "msupply": ""
        }
      ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('0')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `${API}?start=0&limit=20`,
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('0')).rejects.toThrow(errorMessage);
  });
});



