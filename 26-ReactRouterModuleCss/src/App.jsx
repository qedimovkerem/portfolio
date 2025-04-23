import './App.css'
import Homes from '../src/pages/Homes/'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from '../src/layuot/Layout'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import Service from '../src/pages/Service'

const router=createBrowserRouter([
      {
        path :"/",
        element:<Homes/>
      },
      {
        path :"/about",
        element:<About/>
      },
      {
        path :"/contact",
        element:<Contact/>
      },
      {
        path :"/service",
        element:<Service/>
      }
    ]
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
