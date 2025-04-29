import axios from 'axios';
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Catogories from './component/catogories/Catogories';
import {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [data,setData]=useState([]);
  const [loading,setLoading] =useState(true);
  const [pro, setPro] =useState('')
  const [newPrice,setNewPrice]=useState('')
  const [editcat,setEditCat]=useState(null);
  

  let BaseUrl="https://fakestoreapi.com/products";
  let getAllCatogories= async()=>{
    try {
      let res =await axios.get(BaseUrl);
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };

   const addCatogory =()=>{
    if (!pro.trim() || !newPrice.trim()) {
      toast.error('inputlari doldurun');
      return;
    }
    let newCatogory={
      id:uuidv4(),
      title :pro,
      price:newPrice
    };
    setData([...data,newCatogory]);
    toast.success('category elave olundu');
    setPro('');
    setNewPrice('');
   }

   let deleteCategory =(id)=>{
     let findIndex =data.findIndex((cat)=>cat.id===id);
    data.splice(findIndex , 1);
    setData([...data]);
    toast.error("product silindi")
   }


   let resetAll =()=>{
    setData([]);
    toast.error("productlar silindi")
   }


   let editcatogory=(category)=>{
   }


  useEffect(()=>{
    getAllCatogories()
  },[]);

  return (
    <>
     {loading ? (
       <Spinner animation="border" variant="primary" />
     ) :(
      <>
      <Catogories data={data}  onDelete={deleteCategory} onEdit={editcatogory}/>
      <button style={{float:"right", backgroundColor:"red",color:"white" ,borderRadius:"8px"}} onClick={()=>resetAll()}>Reset All</button>
      <div style={{display:"flex",gap:"10px",flexDirection:'column',alignItems:"center"}}>
      <input type="text" 
      placeholder='input Product title'
      value={pro}
      onChange={(e)=>setPro(e.target.value)}
      />
      <input type="number" 
      placeholder='input Product Price'
      value={newPrice}
      onChange={(e)=>setNewPrice(e.target.value)}
      />
      <button style={{backgroundColor:"royalblue" ,color:"white" ,borderRadius:"8px"}} onClick={()=>{addCatogory()}}>Add Catogory</button>
      </div>
      </>
     )}



      <Toaster position="top-right" />
     
    </>
  )
}

export default App
