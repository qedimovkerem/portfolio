import React from 'react'
import Card from '../card/Card'
import style from './cards.module.css'
const Cards = () => {
    let cards=[
        {
            title: "free",
            price: "$0",
            user: "1 users",
            storage:"5GB stroge",
            communtiy:"Community access",
            privite:"Unlimited privite projects",
            support: "dedicate support",
            domain: "Free linked domain",
            repost:"Monthly status reporst"
        },
        {
            title: "Enterprise",
            price: "$49",
            user: "1 users",
            storage:"5GB stroge",
            communtiy:"Community access",
            privite:"Unlimited privite projects",
            support: "dedicate support",
            domain: "Free linked domain",
            repost:"Monthly status reporst"
        },
        {
            title: "pro",
            price: "$9",
            user: "1 users",
            storage:"5GB stroge",
            communtiy:"Community access",
            privite:"Unlimited privite projects",
            support: "dedicate support",
            domain: "Free linked domain",
            repost:"Monthly status reporst"
        }
    ]
  return (
    <div className={style['card-area']}>
        <div className={style.title}>
            <h2 className={style['card-title']}>Pay as you grow</h2>
            <p>With our no hassle pricing plans</p>
        </div>
        <div className={style.card}>
           {cards.map((card,index)=>(
                <Card
                key={index}
                title={card.title}
                price={card.price}
                user={card.user}
                storage={card.storage}
                communtiy={card.communtiy}
                privite={card.privite}
                support={card.support}
                domain={card.domain}
                repost={card.repost}
                />
            ))}
        </div>
    </div>
  )
}

export default Cards