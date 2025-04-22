import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.css"
import Hero from '../hero/Hero'
const Header = () => {
  return (
    <div className='head'>
          <Navbar />
          <Hero />
    </div>
  )
}

export default Header