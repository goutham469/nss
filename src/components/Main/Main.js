import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Description from '../Description/Description'

function Main() {
  return (
    <div>
        <div className='header-root'>
          <Header/>
        </div>
        <div style={{minHeight:"80vh",paddingTop:"80px"}}>
          <Description/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main