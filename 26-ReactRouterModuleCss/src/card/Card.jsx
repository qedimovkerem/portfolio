import React from 'react'
import style from './card.module.css'
const card = ({title,price,user,storage,community,privite,support,domain,repost}) => {
  return (
    <div className={style.card}>
        <p className={style.p}>{title}</p>
        <p className={style.price}>{price}</p>
        <p className={style.p}>{user}</p>
        <p className={style.p}>{storage}</p>
        <p className={style.p}>{community}</p>
        <p className={style.p}>{privite}</p>
        <p className={style.p}>{support}</p>
        <p className={style.p}>{domain}</p>
        <p className={style.p}>{repost}</p>
        <button className={style.btn}>Choose plan</button>
    </div>
  )
}

export default card