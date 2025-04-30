import { useState } from 'react'
import './App.css'
import { addTodo, resetAll ,deleteIcon ,editTodo} from './redux/features/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function App() {
const [todo, setTodo] =useState("")
const todos =useSelector((state) =>state.counter.todos)
const dispatch=useDispatch()
const [edit ,setEdit] =useState(null)

  const submitTodo=(e)=>{
    e.preventDefault()
    if (todo) {
      dispatch(addTodo(todo))
      setTodo('')
    }
  }

  const todoEdit =()=>{
    dispatch(editTodo({id:edit.id, newText:todo}));
    setEdit(null)
    setTodo('')
  }

const selectTodo=(todoItem)=>{
  setEdit(todoItem);
  setTodo(todoItem.text)
}

  return (
    <div className='todolist'>
      <form onSubmit={submitTodo}>
      <h2>ToDo list</h2>
        <input type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         />
        <button type='submit'>add Todo</button>
      </form>
      <div className='ul'>
        {todos.map((item ,index)=>
        <li key={item.id}>{index+1}.{item.text}
        <div className="icon">
        <MdDelete  onClick={()=>dispatch(deleteIcon(item.id))}/>
        <CiEdit onClick={()=>selectTodo(item)}/>
        </div>
        </li>
        )}
      </div>
      <button className='reset' onClick={()=>dispatch(resetAll())}>Reset all</button>
      {edit &&(
        <button onClick={todoEdit}> save</button>
      )}
    </div>
  )
}

export default App
