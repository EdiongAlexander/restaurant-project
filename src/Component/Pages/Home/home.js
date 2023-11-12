import React from 'react'
import Layout from "../../Navigation/layout"
import './home.css'
import './phones.css'

import Upper from './Upper'
import Menu from './Menu'
import Cook from './Cook'
import Editorial from './Editorial'
import Reservation from '../Menu/Reservation'



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