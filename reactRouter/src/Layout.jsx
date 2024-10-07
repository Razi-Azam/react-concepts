import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

//Here, Outlet is provided by react-router-dom that will be changed 
//but its upper and lower items liek Header and Footter will remains same

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout