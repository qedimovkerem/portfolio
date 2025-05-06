import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from '../src/component/layout/Layout'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './pages/Wishlist'
import Basket from './pages/basket/Basket'
import DetailPages from './pages/detailPages/DetailPages'
import Adminpanel from './pages/admin/Adminpanel'
function App() {
  
 
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/logout',
          element:<Logout/>
        },
        {
          path:"/wishlist",
          element:<Wishlist/>
        },
        {
          path:"/basket",
          element:<Basket/>
        },
        {
          path:"/detailPages/:id",
          element:<DetailPages/>
        },
        {
          path:'/adminpanel',
          element:<Adminpanel/>
        }
      ]
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    <Toaster position='top-right'/>
    </>
  )
}

export default App
