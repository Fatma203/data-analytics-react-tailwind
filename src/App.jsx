import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Card from './Components/Card'
import Footer from './Components/Footer'
function App() {

  return (
    <>
        <Navbar />
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Card/>
        <Footer/>
    </>
  )
}

export default App
