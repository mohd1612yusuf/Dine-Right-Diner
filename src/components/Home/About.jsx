import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Dine Right Diner</Typography>
      <Typography component='p'>Dine Right Diner is a contemporary restaurant that offers a delightful culinary experience, emphasizing quality and flavor in every dish. With a diverse menu featuring breakfast, lunch, dinner, and dessert options, the diner caters to various tastes, ensuring there's something for everyone. The inviting atmosphere is perfect for family gatherings, casual outings, or special occasions. Customers can easily make reservations through the user-friendly website. </Typography>
    </Container>
  )
}

export default About