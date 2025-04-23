import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import Titlecard from '../title/Titlecard';
import style from './titlecards.module.css'
const Titlecards = () => {
  let cards=[
    {
      logo: <FaBook /> ,
      title: "Featured title",
      parag: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      location:"Call to action ->"
    },
    {
      logo: <FaBuilding /> ,
      title: "Featured title",
      parag: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      location:"Call to action ->"
    },
    {
      logo: <AiFillDatabase /> ,
      title: "Featured title",
      parag: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      location:"Call to action ->"
    }
  ]
  return (
    <div className={style.cards}>
      {cards.map((card,index)=>(
        <Titlecard 
        key={index}
        logo={card.logo}
        title={card.title}
        parag={card.parag}
        location={card.location}
        />
      ))}
    </div>
  )
}

export default Titlecards