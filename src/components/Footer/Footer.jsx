import React from 'react'
import {Box,Typography} from '@mui/material'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Box className='footer'>
        <Typography component='p'>
            Copyright ©2024 All rights reserved | Developed by <Link to="https://github.com/mohd1612yusuf">Mohammad Yusuf</Link></Typography>
    </Box>
  )
}

export default Footer