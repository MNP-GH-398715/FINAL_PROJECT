import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
                 
          <Typography style={{textAlign:'left'}} variant="h6" component="div" sx={{ flexGrow:1}}>
            ReactApp
          </Typography>
          <Link to={'/'}><Button style={{color:'white'}}>HOME</Button></Link>
          <Link to={'/form'}><Button style={{color:'white'}}>EMPLOYEE PROFILE</Button></Link>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar