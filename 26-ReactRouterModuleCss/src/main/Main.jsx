import React from 'react'
import style from './main.module.css'
const Main = () => {
  return (
    <div className={style.main}>
        <h1>Present your business in a whole new way</h1>
        <p className={style.p}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className={style.btn}>
            <button className={style.btn1}>Get Started</button>
            <button className={style.btn2}>Learn More</button>
        </div>
    </div>
  )
}

export default Main