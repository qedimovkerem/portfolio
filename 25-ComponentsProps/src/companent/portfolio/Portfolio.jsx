import React from 'react'
import './Portfolio.css'
const Portfolio = ({image,title,desc}) => {
  return (
    <div className='card'>
        <img src={image} alt="sekil"/>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Portfolio