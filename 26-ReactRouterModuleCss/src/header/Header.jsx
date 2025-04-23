import React from 'react'
import Navbar from '../navbar/Navbar'
import style from './header.module.css'
import Main from '../main/Main'
const Header = () => {
  return (
    <div className={style.main}>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default Header