import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './Modal.css';
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:2,
  border:1
};

export default function TransitionsModal({
    open ,
    handleClose,
    handleChange , 
    formData , 
    // handleAddProduct,
    handleSubmit

}) {

    console.log(formData);
    

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {formData.id ? "Edit Product" :"Create Product"}
            </Typography>
            <div className='form-container'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url"
                 placeholder="Image"
                 onChange={handleChange}
                 value={formData.image}
                 name='image'
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                 placeholder="Title" 
                 onChange={handleChange}
                 value={formData.title}
                 name='title'
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text"
                 placeholder="Category" 
                  onChange={handleChange}
                  value={formData.category}
                  name='category'
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" 
                placeholder="Number"
                 onChange={handleChange}
                 value={formData.price}
                 name='price'
                 />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" 
                rows={3}
                 onChange={handleChange}
                 value={formData.description}
                 name='description'
                 />
              </Form.Group>
              <Button variant="outlined" type='submit'>{formData.id ?"Edit Product" :"Add Product"}</Button>
            </Form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}