import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../features/productSlice.js'
import Cards from '../component/card/Cards.jsx';
const Home = () => {
  let {allProducts}=useSelector((state)=>state.products);
  let {wishlist}=useSelector((state)=>state.wishlist);
  let dispatch =useDispatch();

  

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  
  return (
    <div className='container' style={{marginTop:"60px"}}>
     <div className="row" style={{display:"flex" ,gap:"30px 0px"}}>
     {allProducts && allProducts.map((product)=><Cards key={product.id} product={product}/>)}
     </div>
      </div>
  );
};

export default Home