import React from 'react'
import Navlist from '../navlist/Navlist'
import Logo from '../logo/Logo'
import style from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.nav}>
        <Logo/>
        <Navlist/>
    </div>
  )
}

export default Navbar