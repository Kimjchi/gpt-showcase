import React from 'react'

import Blog from './containers/blog/Blog.tsx'
import Features from './containers/features/Features.tsx'
import Footer from './containers/footer/Footer.tsx'
import Header from './containers/header/Header.tsx'
import Possibility from './containers/possibility/Possibility.tsx'
import WhatGPT3 from './containers/whatgpt3/WhatGPT3.tsx'
import Brand from './components/brand/Brand.tsx'
import CTA from './components/cta/CTA.tsx'
import Navbar from './components/navbar/Navbar.tsx'



const App = () => {
  return (
    <div className='App'> 
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
