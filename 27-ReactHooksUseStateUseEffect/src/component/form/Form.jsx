import React, { useState } from 'react'
import style from './Form.module.css'
const Form = () => {
        let [result,setResult]=useState(0);
        let [num1,setnum1]=useState("")
      let sum =()=>{
        setResult(result+1)
      }
      let dev=()=>{
        setResult(result-1) 
      }
      let sum2 =()=>{
        setResult(Number(num1)+result)
        setnum1("")
      }
      let dev2=()=>{
        setResult(result-Number(num1))
        setnum1("")
      }

  return (
    <div className={style.container}>
        <div><p className={style.result}>{result}</p></div>
       <div className={style.buttonGroup}>
       <button onClick={()=>sum()} className={style.btn}>+</button>
       <button onClick={()=>dev()} disabled={result===0} className={style.btn2}>-</button>
       </div>

     <div className={style.counter}>
     <input type="number"
     placeholder='number daxil edin'
        onChange={(e)=>setnum1(e.target.value)}
        className={style.input}
        value={num1}
         />

       <div className={style.buttonGroup}>
       <button onClick={()=>sum2()} className={style.btn} disabled={!num1}>+</button>
       <button onClick={()=>dev2()} className={style.btn} disabled={!num1}>-</button>
       </div>
     </div>
    </div>
  )
}

export default Form