import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Solution from './components/Solution'
import PathToMillion from './components/PathToMillion'
import Timeline from './components/Timeline'
import Safety from './components/Safety'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Solution />
      <PathToMillion />
      <Timeline />
      <Safety />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
