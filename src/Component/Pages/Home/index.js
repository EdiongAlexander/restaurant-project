import React from 'react'
import Layout from "../../Navigation/layout"
import './home.css'
import './phones.css'
import Upper from './upper'
import Cook from './cook'
import Editorial from './editorial'
import Reservation from '../Menu/reservations'
import Menu from './menu'



const Home = () => {
  return (
    <div>
      <Layout>
        <Upper />
        <Menu />
        <Cook />
        <Editorial />
        <Reservation />
      </Layout>
    </div>
  )
}

export default Home