import { useReducer } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const reducer =(state,action) =>{
  switch (action.type) {
    case 'name_create':
      return { ...state, name: action.value };
    case 'surname_create':
      return { ...state, surname: action.value };
      case 'ADD_USER':
        const newUser = {
          id: uuidv4(),
          name: state.name,
          surname: state.surname,
        };
        return {
          ...state,
          users: [...state.users, newUser],
          name: '',
          surname: '',
        };
        case 'delete_user':
          return {...state,
            users :state.users.filter((item)=>item.id != action.id)};
            case 'edit_user':
              return {
                ...state,
                name:action.user.name,
                surname:action.user.surname,
                editingUserId: action.user.id
              }
              case 'reset':
                return{
                  ...state,
                  users:[],
                }
}
}

const initialState = {
  name: '',
  surname: '',
  users: []
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
       <div className='list'>
    <div className="form">
    <input 
    type="text" 
    placeholder='Istifadeci adi'
    value={state.name}
    onChange={(e) =>
      dispatch({ type: 'name_create', value: e.target.value })
    }
    />
    <input type="text"
     placeholder='istifadeci soyadi'
     value={state.surname}
     onChange={(e) =>
      dispatch({ type: 'surname_create', value: e.target.value })
    }
     />
    <button onClick={() => dispatch({ type: 'ADD_USER' })}>add User</button>
    </div>
    <ol>
     {state.users.map((user ,index) =>(
      <li key={user.id}>
        <span>{index+1}.</span>
        {user.name} {user.surname}
        <div className='icons'>
        <FaRegEdit onClick={()=>dispatch({type:'edit_user',user})}/>
        <MdDelete  onClick={()=>dispatch({type:'delete_user', id:user.id})}/>
        </div>
      </li>
     ))}
     <button className='reset' onClick={()=>dispatch({type :'reset'})}>Reset</button>
    </ol>
  </div>
    </>
  )
}

export default App
