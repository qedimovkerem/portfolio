// import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const navigate=useNavigate()
  const [isLogined ,setIsLogined]=React.useState(false)
  
  React.useEffect(()=>{
    const islog =async ()=>{
      const res = await axios.get('http://localhost:3001/users');
      const user = res.data.find(user => user.isLoginned == true);
    setIsLogined(!!user)
    
        
    }
    islog();
  },[])
     
    const login=()=>{
      toast.success('Login sehifesine keçid edilir');
      setIsLogined(true)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    };
  
    const register=()=>{
      toast.success("Registersehifesine keçid edilir");
      setTimeout(() => {
        navigate('/register');
      }, 2000);
    };
  
    const logout = async () => {
      const res = await axios.get('http://localhost:3001/users');
      const loggedInUser = res.data.find((user) => user.isLoginned === true);
      
      if (!loggedInUser) {
        toast.error("Aktiv istifadeciyoxdur");
        return;
      }
    
      await axios.put(`http://localhost:3001/users/${loggedInUser.id}`, {
        ...loggedInUser,
        isLoginned: false,
      });

      const newRes = await axios.get('http://localhost:3001/users');
      const updatedUser = newRes.data.find(user => user.isLoginned === true);
      setIsLogined(!!updatedUser);
    
    
      setIsLogined(false);
      toast.success("Logout etdiniz");
      setTimeout(() => {
        navigate('/logout');
      }, 2000);
    };
  
  
   

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                     {isLogined ? (
    <MenuItem onClick={() => {
      handleClose();
      logout();
    }}>
      Logout
    </MenuItem>
  ) : (
    [
      <MenuItem key="login" onClick={() => {
        handleClose();
        login();
      }}>
        Login
      </MenuItem>,
      <MenuItem key="register" onClick={() => {
        handleClose();
        register();
      }}>
        Register
      </MenuItem>
    ]
  )} 
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}