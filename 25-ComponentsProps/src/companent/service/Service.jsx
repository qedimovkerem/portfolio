import React from 'react'
import './Service.css'
const Service = ({icon,name,desc}) => {
  return (
    <div className='product'>
        <div className='icon'>{icon}</div>
        <h2>{name}</h2>
        <p>{desc}</p>
    </div>
  );
};

export default Service