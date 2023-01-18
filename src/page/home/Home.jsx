import React from 'react'
import AboutUs from './component/AboutUs'
import ContactForm from './component/ContactUs/ContactUs'
import CreativeSpeakersComponent from './component/CreativeSpeakers/CreativeSpeakersComponent'
import Header from './component/Header'
import Navbar from './component/Navbar'
import OurPrograms from './component/OurPrograms'
import OverView from './component/OverView'
import Quetions from './component/Questions/Quetions'
import RegisterHere from './component/RegisterHere'
import WatchVideo from './component/WatchVideo/WatchVideo'
import Footer from './component/Footer'


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
      <Quetions />
      <ContactForm />
      <Footer />
    </>
  )
}
