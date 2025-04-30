import React, { useState } from 'react'
import './register.css'
import { FormGroup, FormControl, InputLabel,Input} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';
import FormHelperText from '@mui/material/FormHelperText';
import { registerSchema } from '../../schema/registerSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {

  const navigate = useNavigate();

  const{values,handleChange,handleSubmit,errors,resetForm} =useFormik({
    initialValues: {
      name: '',
       username:'',
       email: '',
       password:'',
       confirmPassword:'',
       isLogined:false,
       id:uuidv4()
    },
    onSubmit: async (values) => {
      const res = await axios.get('http://localhost:3001/users');
      const userExists = res.data.some(
        user => user.username === values.username || user.email === values.email
      );
      if (userExists) {
        toast.error("istifadeci movcuddur")
        return;
      }
    await axios.post('http://localhost:3001/users',values);
       resetForm();
       toast.success('qeydiyyatdan kecdiniz');
       navigate('/login')
    },
    validationSchema:registerSchema,
  });


  const {name,username,email,password,confirmPassword} =values;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
          <h2>Register</h2>
      <FormControl error={Boolean(errors.name)}>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input-name" 
            aria-describedby="my-helper-text" 
            value={name}
            name='name'
             onChange={handleChange} />
               {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          </FormControl>

          <FormControl error={Boolean(errors.username)}>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input-username"
             aria-describedby="my-helper-text" 
             value={username} 
             name='username'
             onChange={handleChange}/>
               {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
          </FormControl>

          
          <FormControl error={Boolean(errors.email)}>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"
              value={email}
              name='email'
               onChange={handleChange}/>
                 {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>



          <FormControl sx={{ m: 1,}} variant="standard" error={Boolean(errors.password)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            name='password'
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
            {errors.name && <FormHelperText>{errors.password}</FormHelperText>}
        </FormControl>



        <FormControl sx={{ m: 1,}} variant="standard" error={Boolean(errors.confirmPassword)}>
          <InputLabel htmlFor="standard-adornment-password">ConfirmPassword</InputLabel>
          <Input
            id="standard-adornment"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
            {errors.name && <FormHelperText>{errors.confirmPassword}</FormHelperText>}
        </FormControl>
        <Button variant="outlined" type='submit'>Primary</Button>
      </form>
  )
}

export default Register