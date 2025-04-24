import { useState } from 'react'
import './App.css'
import Form from './component/form/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form/>
    </>
  )
}

export default App
