import React from 'react'
import './Adminpanel.css'
import { Table } from 'react-bootstrap'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TransitionsModal from '../../utils/Modal'
import { useState } from 'react'
import { addProduct, deleteProduct, UpdateProduct } from '../../features/productSlice'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
const Adminpanel = () => {
    const navigate=useNavigate()
    const back=()=>{
      navigate('/')
    }

    const[formData,SetFormData]=useState({
      image :"",
      title:"",
      category :"",
      price:"",
      description:"",
    })
    let {allProducts} =useSelector((state)=>state.products);
    let dispatch =useDispatch()

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const handleChange =(e)=>{
        const {name , value} =e.target;
        SetFormData({...formData,[name]:value})
      };

      const handleAddProduct=(e)=>{
        e.preventDefault();
        dispatch(addProduct(formData));
        SetFormData({
          image: "",
          title: "",
          category: "",
          price: "",
          description: "",
        });
        handleClose();
        toast.success("Product elave olundu")
      };

      const handleDelete =(id)=>{
        dispatch(deleteProduct(id));
        toast.error("Product silindi")
      };

      const handleEdit =(e)=>{
        e.preventDefault();
        dispatch(UpdateProduct(formData));
        handleClose();
        SetFormData({
          image: "",
          title: "",
          category: "",
          price: "",
          description: "",
        });
        toast.success("Product Edit Olundu")
      }
  return (
     <div className="container">
        <h2 style={{textAlign:"center"}}>Admin Panel</h2>
       <Button variant="contained" onClick={()=>{handleOpen()}}>Create</Button>
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
                <img src={item.image} alt="" style={{width:"150px",height:"150px" }} onClick={()=>{navigate(`/detailPages/${item.id}`)}}/></td>
            <td>{item.title}</td>
            <td>${Number(item.price).toFixed(2)}</td>
            <td>
                {item.category}
            </td>
            <td>
           <div  style={{display:"flex", gap:"10px"}}>
           <Button variant="contained" color='error' onClick={()=>{handleDelete(item.id)}}>Remove</Button>
           <Button variant="contained" color='warning' type='submit'onClick={()=>{handleOpen(); SetFormData(item)}} >Edit</Button>
           </div>
            </td>
          </tr>
        ))}
    </tbody>
  </Table>
  <TransitionsModal open={open} handleClose={handleClose } handleChange={handleChange} formData={formData}
  handleSubmit={formData.id ? handleEdit : handleAddProduct}
   />
  <div className="total">
  <Button variant="contained" color="error" onClick={back}>
  back
</Button>
  </div>
   </div>
  )
}

export default Adminpanel