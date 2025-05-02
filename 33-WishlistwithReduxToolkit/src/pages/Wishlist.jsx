import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetWishlist, updateWishlist } from '../features/WishlistSlice'
import toast from 'react-hot-toast'

const Wishlist = () => {

    let {wishlist}=useSelector((state)=>state.wishlist)
    let dispatch=useDispatch()

    const remove =(item)=>{
      dispatch(updateWishlist(item));
      toast.error("product wishlistden silindi")
    }
    const reset =()=>{
      dispatch(resetWishlist());
      toast.error("productlar wishlistden silindi")
    }

    
  

  return (
   <div className="container">
     <Table striped bordered hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Setting</th>
      </tr>
    </thead>
    <tbody>
        {wishlist && wishlist.map((item)=>(
            <tr style={{textAlign:"center",verticalAlign:"middle"}} key={item.id}>
            <td>
                <img src={item.image} alt="" style={{width:"150px",height:"150px" }}/></td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td><Button variant="danger" onClick={()=>remove(item)}>Remove</Button></td>
          </tr>
        ))}
    </tbody>
  </Table>
  <Button variant="danger" style={{float:"right"}}
  onClick={()=>reset()}
  >Reset All</Button>
   </div>
  )
}

export default Wishlist