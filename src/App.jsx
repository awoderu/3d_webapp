import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Other components go here */}
      <Hero/>
      <ProductViewer />
    </div>
  )
}

export default App