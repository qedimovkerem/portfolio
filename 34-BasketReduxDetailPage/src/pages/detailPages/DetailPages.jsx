import React, { useState } from 'react'
import './detailPages.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, decrement, increment } from '../../features/basketSlice';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
const DetailPages = () => {
    let {id}=useParams();
    let {basket} =useSelector((state)=>state.basket);
    const basketItem = basket.find(item => item.id == id);
    let dispatch=useDispatch();
    const navigate=useNavigate()
    const [count, setCount] = useState(1)
   
    let {allProducts}=useSelector((state)=>state.products)
    let findProduct=allProducts.find((product)=>product.id==id)

    const Increment = () => {
        setCount(count + 1);
      };

      const Decrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
    

  return (
      <div className='box'>
        <div className='detailPages'> 
  <div className="product-image">
    <img src={findProduct.image} alt='' className='image'/>
  </div>
  <div className="product-details">
    <h4 className="product-title">{findProduct.title}</h4>
    <p className="product-category">Category: {findProduct.category}</p>
    <p className="product-price">${findProduct.price}</p>
    <p className="product-description">{findProduct.description}</p>
    <div className="product-rating">
      <span>Rate:{findProduct.rating.rate}</span>
      <span>Revius:{findProduct.rating.count}</span>
    </div>
    <div className="quantity-selector">
      <button className="btn-minus" onClick={Decrement}>-</button>
      <p className='count1'>{count}</p>
      <button className="btn-plus" onClick={Increment}>+</button>
    </div>
    <Button  variant="outlined" 
    color="error" 
    className="add-to-card" 
     onClick={()=>{toast.success("Product Baskete Elave Olundu")
        dispatch(addBasket({...findProduct,count:Number(count)}))}}>Add to Card </Button>
  </div>
</div>
<Button variant="outlined" color="error" onClick={()=>{navigate("/")}}>
      Back
    </Button>
      </div>
     
  )
}

export default DetailPages