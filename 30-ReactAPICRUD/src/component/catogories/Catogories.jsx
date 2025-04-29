import React from 'react'
import Table from 'react-bootstrap/Table';
import Catogory from '../catory/Catogory';
const Catogories = ({data , onDelete ,onEdit}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Product Title</th>
        <th>Product Price</th>
        <th>Setting</th>
      </tr>
    </thead>
    <tbody>
        {data && data.map((category)=><Catogory key={category.id} 
        category={category} 
        deleteCat={()=>onDelete(category.id)} 
        editCat={()=>onEdit(category)}/>)}
    </tbody>
  </Table>
  )
}

export default Catogories