import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
import style from './contact.module.css'
const Contact = () => {
  return (
    <div className={style.contact}>
        <div className={style.title}>
            <div className={style.icon}><SlEnvolopeLetter /></div>
            <h2 className={style['head-title']}>Get in touch</h2>
            <p>We'd love to hear from you</p>
        </div>
        <div className={style.form}>
            <form action="">
                <input type="text"  placeholder='Full name'/><br />
                <input type="number" placeholder='Phone Number'/><br />
                <input type="email"  placeholder='Email addres'/><br />
                <textarea name="" id="" placeholder='message'></textarea><br />
                <button className={style.submit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact