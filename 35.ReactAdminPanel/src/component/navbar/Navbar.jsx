import Dropdown from '../dropdown/Dropdown'
import * as React from 'react';
import './navbar.css'
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let {wishlist}=useSelector((state)=>state.wishlist)
  let {basket}=useSelector((state)=>state.basket)
  return (
    <div className='navbar'>
        <span className="logo" style={{fontSize:"24px"}}>Logo</span>
        <div className='list' style={{fontSize:"20px"}}>
          <li><Link to={"/"} className='link'>Home</Link></li>
          <li>About</li>
          <li>Contact</li>
          <li><Link to={"/adminpanel"} className='link'>AdminPanel</Link></li>
        </div>
        <div className="icons"style={{fontSize:"20px",display:"flex",gap:'10px' ,alignItems:"center" ,cursor:"pointer"}}>
        <Link className='link' to={'/Wishlist'}><CiHeart/><sup>{wishlist.length}</sup></Link>
        <Link className='link' to={'/basket'}><FaBasketShopping /><sup>{basket.reduce((total, item) => total + item.count, 0)}</sup></Link>
        <Dropdown/>
        </div>
    </div>
  )
}

export default Navbar