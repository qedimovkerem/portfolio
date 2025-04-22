import React from 'react'
import './Portfolios.css'
import Portfolio from '../portfolio/Portfolio'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
const Portfolios = () => {
    let cards= [
        {
            image: img1,
            title: "Threads" ,
            desc: "Illustion"
        },
        {
            image: img2,
            title: "Explore" ,
            desc:"Graphic Design"
        },
        {
            image: img3,
            title: "Finish" ,
            desc: "Identity"
        },
        {
            image: img4,
            title: "Lines" ,
            desc:"Branding"
        },
        {
            image: img5,
            title: "Southwest" ,
            desc: "Website design"
        },
        {
            image: img5,
            title: "Window" ,
            desc:"Photography"
        }
    ]
  return (
    <div className='port'>
       <div className="head-title">
       <p className='Head-text'>Portfolio</p>
       <p>Lorem ipsum dolor sit amet consectetur</p>
       </div>
       <div className="portfolio">
        {cards.map((card,index)=>(
        <Portfolio
        key={index}
        image={card.image}
        title={card.title}
        desc={card.desc}
         />
        ))}
       </div>
    </div>
  )
}

export default Portfolios