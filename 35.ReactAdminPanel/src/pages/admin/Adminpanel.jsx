import React from 'react'
import './Adminpanel.css'
import { Table } from 'react-bootstrap'
import { Button, ButtonBase } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Adminpanel = () => {
    const navigate=useNavigate()
    const back=()=>{
      navigate('/')
    }

    let {allProducts} =useSelector((state)=>state.products);
    let dispatch =useDispatch()
    console.log(allProducts);
    

  return (
     <div className="container">
        <h2 style={{textAlign:"center"}}>Admin Panel</h2>
       <Button variant="contained">Create</Button>
     <Table striped bordered hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
        <th>Setting</th>
      </tr>
    </thead>
    <tbody>
        {allProducts && allProducts.map((item)=>(
            <tr style={{textAlign:"center",verticalAlign:"middle"}} key={item.id}>
            <td>
                <img src={item.image} alt="" style={{width:"150px",height:"150px" }}/></td>
            <td>{item.title}</td>
            <td>${(item.price).toFixed(2)}</td>
            <td>
                {item.category}
            </td>
            <td>
           <div  style={{display:"flex", gap:"10px"}}>
           <Button variant="contained" color='error'onClick={()=>{dispatch(removeBasket(item.id)),toast.error("Product Basketden silindi")}}>Remove</Button>
           <Button variant="contained" color='warning'onClick={()=>{dispatch(removeBasket(item.id)),toast.error("Product Basketden silindi")}}>Edit</Button>
           </div>
            </td>
          </tr>
        ))}
    </tbody>
  </Table>
  <div className="total">
  <Button variant="contained" color="error" onClick={back}>
  back
</Button>
<Button variant="outlined" color="error" onClick={()=>{dispatch(resetAllBasket()),toast.error("Productlar Basketden silindi")}}>Reset All</Button>
  </div>
   </div>
  )
}

export default Adminpanel