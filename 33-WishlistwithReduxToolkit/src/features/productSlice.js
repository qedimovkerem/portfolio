import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {allProducts:[],}

const baseUrl1="http://localhost:3001/products"

 export const getProducts =createAsyncThunk("product", async()=>{
  let {data}=await axios.get(baseUrl1)
  return data
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled,(state,action)=>{
      state.allProducts= action.payload
    })
  }
})

export const {extraReducers} = productSlice.actions

export default productSlice.reducer