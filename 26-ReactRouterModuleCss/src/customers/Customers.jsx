import React from 'react'
import { CgAlbum } from "react-icons/cg";
import Customer from '../custumer/Customer'
import style from './customers.module.css'
const Customers = () => {
    let cards=[
        {
            icon: <CgAlbum />,
            title:"Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
            name:"-Client Name,location"
        },
        {
            icon: <CgAlbum />,
            title:"Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
            name:"-Client Name,location"
        }
    ]
  return (
    <div>
        <div className={style.title}>
            <h2 className={style['title-head']}>Customer testimonials</h2>
            <p>Our customers love working with us</p>
        </div> 
        <div className={style.card}>
        {
            cards.map((card,index)=>(
               <Customer
                key={index}
                icon={card.icon}
                title={card.title}
                name={card.name}
                />
            ))
        }
        </div>
    </div>
  )
}

export default Customers