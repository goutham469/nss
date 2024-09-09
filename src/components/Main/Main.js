import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div>
        <div className='header-root'>
          <Header/>
        </div>
        <div style={{minHeight:"80vh",paddingTop:"80px"}}>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main