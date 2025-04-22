import React from 'react'
import "./Navlist.css"
const Navlist = () => {
  return (
    <div>
        <ul className='nav-list'>
            <li className='nav-list-item'><a href="">Services</a></li>
            <li className='nav-list-item'><a href="">Portfolio</a></li>
            <li className='nav-list-item'><a href="">Home</a></li>
            <li className='nav-list-item'><a href="">About</a></li>
            <li className='nav-list-item'><a href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navlist