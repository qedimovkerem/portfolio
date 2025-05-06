import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {wishlist:[],}


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    updateWishlist:(state,action)=>{
       let existProduct =state.wishlist.find((product)=>product.id==action.payload.id)
        if (existProduct) {
            state.wishlist=state.wishlist.filter((product)=>product.id!=action.payload.id)
        }else{
            state.wishlist.push(action.payload)
        }
    },
    resetWishlist:(state)=>{
      state.wishlist=[]
    }
  }
})

export const {updateWishlist ,resetWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer