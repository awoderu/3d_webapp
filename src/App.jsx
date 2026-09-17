import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Showcase from './components/Showcase'
import Performance from './components/Performance'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Other components go here */}
      <Hero/>
      <ProductViewer />
      <Showcase />
      <Performance />
    </div>
  )
}

export default App