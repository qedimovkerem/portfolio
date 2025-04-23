import React from 'react'
import style from './navlist.module.css'
import { Link } from 'react-router-dom';
const Navlist = () => {
  return (
    <ul className={style.list}>
        <li>
            <Link to="/" className={style['list-item']}>Home</Link>
        </li>
        <li>
            <Link to="/about" className={style['list-item']}>About</Link> 
        </li>
        <li>
            <Link to="/contact" className={style['list-item']}>Contact</Link>
        </li>
        <li>
            <Link to="/service" className={style['list-item']}>Service</Link>
        </li>
    </ul>
  )
}

export default Navlist