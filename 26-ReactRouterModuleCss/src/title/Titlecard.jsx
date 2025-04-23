import React from 'react'
import style from './titlecard.module.css'
const Titlecard = ({logo,title,parag,location}) => {
  return (
    <div className={style.card}>
        <div className={style.logo}>{logo}</div>
        <h2>{title}</h2>
        <p>{parag}</p>
        <p className={style.pfoot}>{location}</p>
    </div>
  )
}

export default Titlecard