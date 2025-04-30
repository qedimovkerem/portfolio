import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Navbar = () => {
   const navigate =useNavigate()

    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const login =()=>{
      toast.success('login sehifesine kecid edilir')
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    }
    const logout =()=>{
      toast.success("logout sehifesine kecid edilir")
      setTimeout(() => {
        navigate('/logout')
      }, 2000);
    }

    const register =()=>{
      toast.success("register sehifesine kecid edilir")
      setTimeout(() => {
        navigate('/register')
      }, 2000);
    }
    
  return (

    <Container fixed>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 100, }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,width:'10px'}}>
            Material ui
          </Typography>


          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '4px' ,marginRight:'300px'}}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon  style={{color:'white'}}/>
      </IconButton>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        style={{ flex: 1, paddingLeft: '8px',color:'white' }}
      />
    </div>


          <FormControl variant="standard" sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: 1 }}>
              <InputLabel id="dropdown-label">Menu</InputLabel>
              <Select
                labelId="dropdown-label"
                value={value}
                onChange={handleChange}
                label="Menu" >
                <MenuItem value="profile" onClick={register}>Register</MenuItem>
                <MenuItem value="settings" onClick={login}>Login</MenuItem>
                <MenuItem value="logout" onClick={logout}>Logout</MenuItem>
              </Select>
            </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
  )
}

export default Navbar