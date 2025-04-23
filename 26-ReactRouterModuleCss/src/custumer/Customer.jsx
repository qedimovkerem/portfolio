import React from 'react'
import style from './customer.module.css'
const Customer = ({icon,title,name}) => {
  return (
    <div className={style.card}>
        <div>
            <div className={style.icon}>{icon}</div>
        </div>
        <div>
        <h3>{title}</h3>
        <p>{name}</p>
        </div>
    </div>
  )
}

export default Customer