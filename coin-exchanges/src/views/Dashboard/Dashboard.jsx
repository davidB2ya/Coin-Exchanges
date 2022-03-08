import React from 'react'
import Content from '../../components/Content'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import '../../sass/app.scss'

const Dashboard = () => {

  return (
    <div className="container-home">
      <SideBar />
      <div >
        <NavBar />
        <Content />
      </div>
    </div>
  )
}

export default Dashboard