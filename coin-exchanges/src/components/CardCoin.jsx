import React, { useState } from 'react'
import { SiBitcoinsv, SiBinance, SiDogecoin, SiLitecoin, SiBitcoincash } from 'react-icons/si'
import { BsCoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { ImCoinDollar } from 'react-icons/im'
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import '../sass/app.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios'

const CardCoin = ({ data }) => {

    const { id, rank, name, symbol, price_btc, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = data

    const [stateButton, setstateButton] = useState(false)
    const [price, setPrice] = useState(price_btc)
    const [priceUSD, setPriceUSD] = useState(price_usd)
    // const [infoId, setInfo] = useState()
    let iconSelect = <BsCoin />

    let Icons = [
        {
            id: '90',
            icon: <SiBitcoinsv />,
        },
        {
            id: '80',
            icon: <FaEthereum />,
        },
        {
            id: '2710',
            icon: <SiBinance />,
        },
        {
            id: '33285',
            icon: <ImCoinDollar />,
        },
        {
            id: '2',
            icon: <SiDogecoin />,
        },
        {
            id: '1',
            icon: <SiLitecoin />,
        },
        {
            id: '2321',
            icon: <SiBitcoincash />,
        }
    ]

    const dataGrafic = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    // useEffect(() => {
    //     axios({
    //         url: `https://api.coinlore.net/api/exchange/?id=${id}`
    //     })
    //         .then(response => {
    //             setInfo(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [id])

    // https://api.coinlore.net/api/exchange/?id=5

    const IconSelect = () => {
        for (let index = 0; index < Icons.length; index++) {
            if (id === Icons[index].id) {
                iconSelect = Icons[index].icon
                return true
            }
        }
        return true
    }

    const toggler = () => {
        if (stateButton === false) {
            setstateButton(true)
        }
        else if (stateButton === true) {
            setstateButton(false)
        }
    }

    const converter = (e) => {
        setPrice(e.target.value)
        setPriceUSD((e.target.value * price_usd).toFixed(2))
    }

    return (
        <div className="CardCoin">
            <div className="ContainerCard">
                <span>{rank}</span>
                {IconSelect() && iconSelect}
                <h3>{name}</h3>
                <span className="symbol">{symbol} :
                    <input
                        className="input_price"
                        type="text"
                        placeholder={price_btc}
                        value={price}
                        onChange={(e) => converter(e)}
                    />
                </span>
                <div className="ArrowsExchange">
                    <CgArrowsExchangeAlt />
                </div>
                <span className="USD">USD : {priceUSD} </span>
                {stateButton ?
                    <button onClick={toggler} className="btnArrow">
                        <IoIosArrowUp />
                    </button> :
                    <button onClick={toggler} className="btnArrow">
                        <IoIosArrowDown />
                    </button>}
            </div>
            <div className={`${stateButton ? 'is-valid' : 'is-invalid'}`}>
                <div>
                    <span className="percent">Variación última hora: {percent_change_1h < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_1h}%</span>
                    <br />
                    <span className="percent">Variación últimas 24 hs: {percent_change_24h < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_24h}%</span>
                    <br />
                    <span className="percent">Variación últimos 7 días: {percent_change_7d < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_7d}%</span>
                </div>
                <div>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={dataGrafic}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 500,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default CardCoin