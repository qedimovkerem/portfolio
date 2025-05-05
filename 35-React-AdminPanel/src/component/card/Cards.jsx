import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cards.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateWishlist } from '../../features/wishlistSlice';
import "@fortawesome/fontawesome-free/css/all.css";
import toast from 'react-hot-toast';
import {addBasket} from '../../features/basketSlice';
import { useNavigate } from 'react-router-dom';

const Cards = ({product}) => {
  const navigate=useNavigate();
    let {wishlist}=useSelector((state)=>state.wishlist)
    let {basket}=useSelector((state)=>state.basket)    
    const [color,setcolor]=useState(false)
    const dispatch=useDispatch()
    const [icon, setIcon] = useState('far fa-heart')
      let findProduct=wishlist.find((item)=>item.id==product.id)
    useEffect(()=>{
        if (findProduct) {
            setcolor('red')
            setIcon('fas fa-heart')
        }else{
            setcolor("black")
            setIcon('far fa-heart')
        }
    },[findProduct])


  return (
   <div className='col-lg-3'>
     <Card style={{ width: '18rem'}}  onClick={()=>{navigate(`/detailPages/${product.id}`)}}>
      <Card.Img variant="top"
       src={product.image} 
       style={{height:"18rem",padding:"35px"}}
       />
       <i className={icon}
       onClick={(e)=>{
        e.stopPropagation(),
        dispatch(updateWishlist(product));
        if (findProduct) {
            toast.error("product wishlistden silindi");
          } else {
            toast.success("product wishliste elave olundu");
          }
       }}
        style={{fontSize:"20px",
            position:"absolute",
             top:"20px",
             right:"20px",
             cursor:"pointer",
             color: color,
             }}
       ></i>
      <Card.Body>
        <Card.Title>{product.title.slice(0,20)}</Card.Title>
        <Button 
        variant="primary" 
        style={{width:"16rem"} }
        onClick={(e)=>{
          e.stopPropagation(),
          dispatch(addBasket(product))
          toast.success("Product Baskete Elave Olundu")
        }}>Add Basket</Button>
      </Card.Body>
    </Card>
   </div>
  )
}

export default Cards