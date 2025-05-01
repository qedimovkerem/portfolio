import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Badge } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import  axios  from 'axios';


const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); 
  const [auth, setAuth] = React.useState(true); 
  const [isLogined , setIslogined] =React.useState(false)


  React.useEffect(()=>{
    const islog =async ()=>{
      const res = await axios.get('http://localhost:3001/users');
      const user = res.data.find(user => user.isLogined === true);
    setIslogined(!!user)
    }
    islog();
  },[])




  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const login = () => {
    toast.success('Login sehifesine keçid edilir');
    setIslogined(true)
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const logout = async() => {
    const res = await axios.get('http://localhost:3001/users');
    const loggedInUser = res.data.find((user) => user.isLogined === true);
    if (loggedInUser) {
      await axios.patch(`http://localhost:3001/users/${loggedInUser.id}`, {
        isLogined: false,
      });
    }
    setIslogined(false)
    toast.success("Logout sehifesine keçid edilir");
    setTimeout(() => {
      navigate('/logout');
    }, 2000);
  };

  const register = () => {
    toast.success("Registersehifesine keçid edilir");
    setTimeout(() => {
      navigate('/register');
    }, 2000);
  };




  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >


      {isLogined ?(
         <MenuItem onClick={logout}>Logout</MenuItem>
      ):  (
          <>
           <MenuItem onClick={login}>login</MenuItem>
           <MenuItem onClick={register}>Register</MenuItem>
          </>
      )}
     
    </Menu>
  );

  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={login}>
        <IconButton
          size="large"
          aria-label="login"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem onClick={register}>
        <IconButton
          size="large"
          aria-label="register"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Register</p>
      </MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

        
          {auth && (
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

     
      {renderMenu}
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;