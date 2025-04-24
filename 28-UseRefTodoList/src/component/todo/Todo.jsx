import React, { useEffect, useState } from 'react'
import style from './Todo.module.css'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {

    let [task,setTask]=useState('');
    let [todoTask,setTodoTask]=useState([]);
    let [editId , setEditId] =useState('')
    let [editValue,setEditValue]=useState('')

    useEffect(()=>{
        if(localStorage.getItem("todos")) {
            let todos=JSON.parse(localStorage.getItem("todos")||[]);
            setTodoTask(todos);
        }
    },[])

    let addTodo=()=>{
        if (!task)return
        if (editId) {
            let updatedTodos = todoTask.map((item) => {
                if (item.id === editId) {
                    return { ...item, name: task };
                }
                return item;
            });
            setTodoTask(updatedTodos);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            toast.success("Todo edit olundu");
            setEditId(null);
            setTask('');
        }else{
        const newTodo={
            name:task,
           id: uuidv4(),
           access:false
        };
        setTodoTask([...todoTask,newTodo]);
        localStorage.setItem(('todos'),JSON.stringify([...todoTask, newTodo]));
        setTask('');
        toast.success("todo elave olundu")}
    }
    let deleteTodo=(id)=>{
        let filtertodo=todoTask.filter((item)=>item.id !==id);
        setTodoTask(filtertodo)
        localStorage.setItem('todos' ,JSON.stringify(filtertodo));
        toast.error("todo silindi")
    }
    let accesTodo=(id)=>{
        let access =todoTask.map((todo=>{if (todo.id===id) {
            return{...todo,access:true};
        }else{
             return todo;
        }
    }));
    setTodoTask(access)
    localStorage.setItem('todos',JSON.stringify(access));
    toast.success("todo access olundu")
}
    let editTodo=(id ,currentValue)=>{
        setEditId(id);
        setTask(currentValue);
    }


  return (
    <div className={style.todo_list}>
    <div className={style.todo}>
        <h1>ToDo List</h1>
        <input type="text" 
         value={task}
         onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={addTodo} className={style.add_Todo}>add Todo</button>
    </div>
    <div className={style.list} >
    <div >
    { Array.isArray(todoTask) && todoTask.map((item,index)=>(
        <div  className={style.li}
        style={{
            backgroundColor:item.access? 'green': 'red',
            color:'white',
            textDecoration: item.access ? 'line-through' : 'none'
        }}
         key={item.id}>
            <span>{index+1}</span>
            {item.name}
      <span className={style.btn_area}>
      <button 
      style={{display:item.access?'inline':'none'}}
      className={style.deleteIcon} onClick={()=>deleteTodo(item.id)}><MdDelete /></button>
       <button onClick={()=>editTodo(item.id,item.name)}><FaEdit /></button>
       <button className={style.accesIcon} onClick={()=>accesTodo(item.id)}><GiConfirmed /></button>
      </span>
        </div>))}
    </div>
    </div>
    <ToastContainer 
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  theme="colored"
/>
    </div>
  )
}


export default Todo