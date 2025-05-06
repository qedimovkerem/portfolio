import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {basket:[]}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket:(state,action)=>{
        const count = Number(action.payload.count) || 1; 
        let existProduct = state.basket.find((product) => product.id === action.payload.id);
        if (!existProduct) {
          state.basket.push({ ...action.payload, count });
        } else {
          existProduct.count += count;
        }
    },
    removeBasket:(state, action)=>{
        state.basket=state.basket.filter((item)=>item.id!=action.payload);
    },
    resetAllBasket:(state)=>{
        state.basket=[]
    },
    increment:(state,action)=>{
        let findProduct=state.basket.find((product)=>product.id===action.payload);
        if (findProduct) {
            findProduct.count+=1
        }
    },
    decrement:(state,action)=>{
        let findProduct=state.basket.find((product)=>product.id===action.payload);
        if (findProduct) {
            if (findProduct.count>1) {
                findProduct.count-=1
            };
        };
    },
  },
})

export const {addBasket,removeBasket,resetAllBasket,increment,decrement} = basketSlice.actions
export default basketSlice.reducer