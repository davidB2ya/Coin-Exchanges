import React from 'react'
import { FaPiggyBank } from 'react-icons/fa'
import '../sass/app.scss'

const NavBar = () => {

    return (
        <div className="NavBar">
            <a href="/"><FaPiggyBank /></a>
            <h2> Coin Exchanges B2ya</h2>
            <span>by 💙 <a target="blank" href="https://linkedin.com/in/david-bedoya-hernández-520061216">B2ya</a></span>
        </div>
    )
}

export default NavBar