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
import { registerSchema } from '../schema/registerSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


const Register = () => {
  const baseUrl='http://localhost:3001/users';
  const navigate=useNavigate();
   
  const{values,handleSubmit,handleChange,errors,resetForm}=useFormik({
    initialValues:{
      name:'',
      username:'',
      email:"",
      password:"",
      confirmPassword:"",
      id:uuidv4(),
      isLoginned:false
    },
    onSubmit: async(values)=>{
      const res =await axios.get(baseUrl)
      const existUser=res.data.find((item)=>item.username===values.username ||item.email===values.email)

      if (existUser) {
        toast.error("Istifadeci movcuddur")
        return
      };
      await axios.post(baseUrl,values);
      toast.success("Qeydiyyat ugurlu oldu")
      setTimeout(() => {
        resetForm
        navigate('/login')
      }, 2000);
    },
    validationSchema:registerSchema
  })

   const{name,username,email,password,confirmPassword}=values

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
      <h2 style={{textAlign:'center'}}>Register</h2>
      <FormControl  error={Boolean(errors.email)}>
      <InputLabel htmlFor="my-input">Name</InputLabel>
       <Input id="my-input-name" 
       aria-describedby="my-helper-text"
       value={name}
       name='name'
       onChange={handleChange}
        />
        {errors.name &&<FormHelperText>{errors.name}</FormHelperText>}
     </FormControl>


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

     <FormControl  error={Boolean(errors.email)}>
      <InputLabel htmlFor="my-input">Email</InputLabel>
       <Input id="my-input-email" 
       aria-describedby="my-helper-text"
       value={email}
       name='email'
       onChange={handleChange}
        />
        { errors.email &&<FormHelperText>{errors.email}</FormHelperText>}
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



        <FormControl  error={Boolean(errors.email)} sx={{ m: 1,}} variant="standard" >
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-confirmPassword"
            type={showPassword ? 'text' : 'confirmPassword'}
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
          { errors.confirmPassword &&<FormHelperText>{errors.confirmPassword}</FormHelperText>}
        </FormControl>

        <Button type='submit' variant="outlined">Sing in</Button>
    </form>
  )
}

export default Register