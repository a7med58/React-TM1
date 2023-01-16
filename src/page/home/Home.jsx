import React from 'react'
import AboutUs from './component/AboutUs'
import CreativeSpeakersComponent from './component/CreativeSpeakers/CreativeSpeakersComponent'
import Header from './component/Header'
import Navbar from './component/Navbar'
import OurPrograms from './component/OurPrograms'
import OverView from './component/OverView'
import RegisterHere from './component/RegisterHere'
import WatchVideo from './component/WatchVideo/WatchVideo'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <OverView />
      <WatchVideo />
      <CreativeSpeakersComponent/>
      <OurPrograms />
      <RegisterHere />
    </>
  )
}
