import React, { useEffect, useState } from 'react'
import CardCoin from './CardCoin'
import axios from 'axios'
import '../sass/app.scss'

const Content = () => {

    const [start, setStart] = useState(0)
    const [info, setInfo] = useState([])
    // const [search, setSearch] = useState(info)
    // const [allInfo, setAll] = useState(info)

    useEffect(() => {
        axios({
            url: `https://api.coinlore.net/api/tickers/?start=${start}&limit=20`
        })
            .then(response => {
                setInfo(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [start])

    // useEffect(() => {
    //     axios({
    //         url: `https://api.coinlore.net/api/tickers`
    //     })
    //         .then(response => {
    //             setAll(response.data.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [search])

    // const inputChange = (e) => {
    //     const input = e.target.value.toLowerCase().trim()
    //     if (input === '') {
    //         setAll(info)
    //     } else {
    //         const filter = allInfo.filter(item => item.nameid.toLowerCase().startsWith(input))
    //         setAll(filter)
    //     }
    // }

    return (
        <div>
            {/* <div className = "search">
                <h3>Buscar Criptomoneda :</h3>
                <input 
                    onChange={(e)=> inputChange(e)} 
                    type="search"
                    placeholder="Buscar..."
                    autocomplete="off"
                    
                />
            </div> */}

            {
                info.length === 0 ?
                    <div className="contenedor_loader">
                        <div className="loader"></div>
                    </div>
                    :
                    <div>
                        {info.map((coin) => (
                            <CardCoin key={coin.id} data={coin} />
                        ))}
                    </div>
            }

            < div className="pagination">
                <span>Páginas</span>
                <button onClick={() => { setStart(0) }}>1</button>
                <button onClick={() => { setStart(20) }}>2</button>
                <button onClick={() => { setStart(40) }}>3</button>
                <button onClick={() => { setStart(60) }}>4</button>
                <button onClick={() => { setStart(80) }}>5</button>
            </div >
        </div>
    )
}

export default Content