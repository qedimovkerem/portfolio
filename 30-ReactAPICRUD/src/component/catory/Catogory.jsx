import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Catogory = ({category , deleteCat , editCat}) => {
    let {title,price} =category;
  return (
        <tr>
            <td>{category.title}</td>
            <td>${category.price}</td>
            <td style={{fontSize:"20px"}}><MdDelete  style={{cursor:"pointer"}} onClick={deleteCat}/> <FaEdit style={{cursor:"pointer"}} onClick={()=>editCat(category)}/></td>
        </tr>
  )
}

export default Catogory