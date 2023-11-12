import React from 'react'
import Layout from "../../Navigation/layout"
import './home.css'
import './phones.css'
import Upper from './upper'
import Cook from './cook'
import Editorial from './editorial'
import Reservation from '../Menu/reservations'



const Home = () => {
  return (
    <div>
      <Layout>
        <Upper />
        <Cook />
        <Editorial />
        <Reservation />
      </Layout>
    </div>
  )
}

export default Home