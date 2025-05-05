import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, basketSlice, decrement, increment, removeBasket, resetAllBasket } from '../../features/basketSlice';
import { Table } from 'react-bootstrap';
import'./basket.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Basket = () => {
    let {basket} =useSelector((state)=>state.basket);
    let dispatch=useDispatch();

    let totalPrice=basket.reduce((sum,basket)=>sum+basket.count*basket.price,0)

    const navigate=useNavigate()
    const back=()=>{
      navigate('/')
    }
    
  return (
    <div className="container">
     <Table striped bordered hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Count</th>
        <th>Setting</th>
      </tr>
    </thead>
    <tbody>
        {basket && basket.map((item)=>(
            <tr style={{textAlign:"center",verticalAlign:"middle"}} key={item.id}>
            <td>
                <img src={item.image} alt="" style={{width:"150px",height:"150px" }}/></td>
            <td>{item.title}</td>
            <td>${(item.price*item.count).toFixed(2)}</td>
            <td>
                <div className="count-area">
                <button className='minusbtn'
                disabled={item.count===1}
                onClick={()=>{dispatch(decrement(item.id))}}>-</button>
                <button className='count'>{item.count}</button>
                <button className='plusbtn' onClick={()=>{dispatch(increment(item.id))}}>+</button>
                </div>
            </td>
            <td><Button variant="contained" color='error'onClick={()=>{dispatch(removeBasket(item.id)),toast.error("Product Basketden silindi")}}>Remove</Button></td>
          </tr>
        ))}
    </tbody>
  </Table>
  <div className="total">
  <Button variant="contained" color="error" onClick={back}>
  back
</Button>
<p>Total Price:{totalPrice.toFixed(2)}</p> 
<Button variant="outlined" color="error" onClick={()=>{dispatch(resetAllBasket()),toast.error("Productlar Basketden silindi")}}>Reset All</Button>
  </div>
   </div>
  )
}

export default Basket