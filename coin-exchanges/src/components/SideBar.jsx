import React from 'react'
import '../sass/app.scss'
import { BsGraphUp, BsLayoutTextSidebarReverse } from 'react-icons/bs'

const SiderBar = () => {

    return (
        <div className="SiderBar">
            <h2>SiderBar  <BsLayoutTextSidebarReverse /></h2>
            <h3>Filtros</h3>
            <ul>
                <li className="active">Ranking   <BsGraphUp /></li>
                <li>Top 5</li>
                <li>Top 10</li>
                <li></li>
            </ul>
        </div>
    )
}

export default SiderBar