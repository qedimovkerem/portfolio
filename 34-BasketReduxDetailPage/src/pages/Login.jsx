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
import { loginSchema } from '../schema/loginSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const baseUrl='http://localhost:3001/users';
  const navigate=useNavigate();
   
  const{values,handleSubmit,handleChange,errors,resetForm}=useFormik({
    initialValues:{
      username:'',
      password:"",
      isLoginned:false
    },
    onSubmit: async(values)=>{
      const res =await axios.get(baseUrl)
      const existUser=res.data.find((item)=>item.username===values.username &&item.password===values.password)

      if (!existUser) {
        toast.error("Istifadeci tapilmadi")
        return
      }else{
        await axios.patch(`${baseUrl}/${existUser.id}`, {
          isLoginned: true
        });
        toast.success("Daxil oldunuz") 
      setTimeout(() => {
        resetForm
        navigate('/')
      }, 2000);
      }
    },
    validationSchema:loginSchema
  })

   const{username,password}=values

  const [showPassword, setShowPassword] = React.useState(false);

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
    <form  onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"400px",gap:"20px",border:"1px solid royalblue",padding:"40px",borderRadius:"8px" ,margin:"100px auto",boxShadow:"0px 4px 10px rgba(255, 0, 0, 0.4)"}}>
    <h2 style={{textAlign:'center'}}>Login</h2>
    <FormControl  error={Boolean(errors.email)}>
    <InputLabel htmlFor="my-input">Username</InputLabel>
     <Input id="my-input-username" 
     aria-describedby="my-helper-text"
     value={username}
     name='username'
     onChange={handleChange}
      />
      {errors.username &&<FormHelperText>{errors.username}</FormHelperText>}
   </FormControl>

   <FormControl sx={{ m: 1,}} variant="standard"  error={Boolean(errors.email)}>
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
           {errors.password &&<FormHelperText>{errors.password}</FormHelperText>}
        </FormControl>

        <Button type='submit' variant="outlined">Login</Button>
    </form>
  )
}

export default Login