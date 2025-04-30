import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Registers from './pages/Registers'
import Home from './pages/Home'
import Logins from './pages/Logins'
import Logout from './pages/Logout'
import Loyout from '../src/component/loyout/Loyout'
import { Toaster } from 'react-hot-toast';
import ProductProvider from './component/productContext/ProductContext';
function App() {

  const router=createBrowserRouter([
    {
      path :"/",
      element:<Loyout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path :"/logout",
          element:<Logout/>
        }
      ]
    },
    {
      path :"/register",
      element:<Registers/>
    },
    {
      path :"/login",
      element:<Logins/>
    }
  ]
)

  return (
    <ProductProvider>
      <RouterProvider router={router}/>
      <Toaster position="top-center" />
      </ProductProvider>
  )
}

export default App
