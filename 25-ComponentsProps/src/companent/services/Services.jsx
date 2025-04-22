import React from 'react'
import Service from '../service/Service'
import { SlBasket } from "react-icons/sl";
import { MdComputer } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import './Services.css'
const Services = () => {
    let services =[ 
        {
            id :1,
            name:"E-Commerce",
            description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            icon : <SlBasket />     
    },
    {
        id : 2,
        name : "Responsive Design",
        description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." ,
        icon : <MdComputer />
    },
    {
        id : 3,
        name : "Web Security",
        description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." ,
        icon :<IoLockClosed />
    }
]
  return (
    <div>
       <div className="title">
         <p className='hero-text'>Services</p>
       <p>Lorem ipsum dolor sit amet consectetur.</p>
       </div>
          <div className="servis">
          {services.map((service , id) =>(
            <Service 
            key={service.id}
            icon={service.icon}
            name={service.name}
            desc={service.description}
            />
        ))}
          </div>
    </div>
  );
};

export default Services