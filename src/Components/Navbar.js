import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
   boxShadow: 'none'
});

const Navbar = () => {
  return (
    <CustomAppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img id='logo' src="https://i.ibb.co/c1RrTxJ/e3598885-9924-48ad-8882-64a9f88cd6c9-removebg-preview.png" alt="Logo" />
        </Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;



