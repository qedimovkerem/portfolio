import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
const initialState = {
   todos:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state ,action)=>{
        state.todos.push({
             id:uuidv4(),
            text:action.payload
        })
    },
    deleteIcon:(state,action)=>{
        let delet=state.todos.findIndex((item)=>item.id===action.payload)
        state.todos.splice(delet,1)
    },
    resetAll:(state,action)=>{
        state.todos=[]
    },
    editTodo:(state,action)=>{
        const { id, newText } = action.payload;
        const edit= state.todos.findIndex((item)=>item.id===id);
        state.todos[edit].text=newText
    }
  },
})

export const {addTodo ,deleteIcon ,resetAll ,editTodo} = counterSlice.actions

export default counterSlice.reducer