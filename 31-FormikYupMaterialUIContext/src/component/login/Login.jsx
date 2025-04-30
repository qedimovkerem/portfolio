import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel,Input} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { loginSchema } from '../../schema/loginSchema';

const Login = () => {
    const navigate =useNavigate();

    const{values,handleChange,handleSubmit,errors,resetForm} =useFormik({
        initialValues: {
           username:'',
           password:'',
           isLogined:true
        },
        onSubmit: async (values) => {;
            const res= await axios.get('http://localhost:3001/users');
            const currentUser = res.data.find((user)=>user.username==username && user.password===password)
           resetForm();
           if (currentUser) {
            toast.success('qeydiyyatdan kecdiniz');
           navigate('/')
           }else{
            toast.error("istifadeci tapilmadi")
           }
        },
        validationSchema:loginSchema,
      });
      const {username,password} =values;

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
        <h2>Login</h2>
        <FormControl error={Boolean(errors.username)}>
        <InputLabel htmlFor="my-input">Username</InputLabel>
           <Input id="my-input"
            aria-describedby="my-helper-text"
            value={username}
             name="username"
             onChange={handleChange} 
             />
              {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
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

        <Button variant="outlined" type='submit'>Primary</Button>
    </form>
  )
}

export default Login