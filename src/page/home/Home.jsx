import React from 'react'
import AboutUs from './component/AboutUs'
import Header from './component/Header'
import Navbar from './component/Navbar'
import OverView from './component/OverView'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <OverView />
    </div>
  )
}
