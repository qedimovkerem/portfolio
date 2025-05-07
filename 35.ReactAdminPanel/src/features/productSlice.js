import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {allProducts:[],}

const baseUrl1="http://localhost:3001/products"

 export const getProducts =createAsyncThunk("product", async()=>{
  let {data}=await axios.get(baseUrl1)
  return data
})

export const addProduct =createAsyncThunk('products/addproduct',async (product)=>{
  let {data} = await axios.post(baseUrl1 , product);
  return data;
});

export const deleteProduct =createAsyncThunk('products/deleteproduct',async (id)=>{
  await axios.delete(`${baseUrl1}/${id}`);
  return id;
});

export const UpdateProduct =createAsyncThunk('products/editproduct',async (product)=>{
  const { id, ...updatedProduct } = product;
  let {data} = await axios.put(`${baseUrl1}/${id}`,updatedProduct);
  return data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled,(state,action)=>{
      state.allProducts= action.payload
    });
    builder.addCase(addProduct.fulfilled,(state,action)=>{
      state.allProducts.push(action.payload)
    });
    builder.addCase(deleteProduct.fulfilled,(state,action)=>{
      state.allProducts= state.allProducts.filter((product)=>product.id!==action.payload)
    });
    builder.addCase(UpdateProduct.fulfilled,(state,action)=>{
      state.allProducts= state.allProducts.map((product)=>{
        if (product.id==action.payload.id) {
          return action.payload
        }else{
          return product;
        }
      })
    });
    
  }
})

export const {extraReducers} = productSlice.actions

export default productSlice.reducer