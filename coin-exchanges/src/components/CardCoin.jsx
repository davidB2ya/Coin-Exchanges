import React, { useState } from 'react'
import { SiBitcoinsv, SiBinance, SiDogecoin, SiLitecoin, SiBitcoincash } from 'react-icons/si'
import { BsCoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { ImCoinDollar } from 'react-icons/im'
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import '../sass/app.scss';
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
                <span className="percent">Variación última hora: {percent_change_1h < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_1h}%</span>
                <br />
                <span className="percent">Variación últimas 24 hs: {percent_change_24h < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_24h}%</span>
                <br />
                <span className="percent">Variación últimos 7 días: {percent_change_7d < 0 ? <div className="btnDown"><TiArrowDownThick /></div> : <div className="btnUp"><TiArrowUpThick /></div>} {percent_change_7d}%</span>
            </div>
        </div>
    )
}

export default CardCoin