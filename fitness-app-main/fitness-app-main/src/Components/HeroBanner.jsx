import React from 'react'
import {Box,Button, Stack, Typography} from '@mui/material'
import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='700' mt={3} mb={3} sx={{fontSize: {lg: '44px', xs: '40px'}}} >
            Sweat, smile <br/> and Repeat 
        </Typography>
        <Typography fontSize='22px' mb={4}  lineHeight='35px'>
            Check out the most effective exercises
        </Typography>
        <Button href='#exercises' variant='contained'
        sx={{
            backgroundColor: '#FF2625', padding: '10px'
        }}>
            Explore Exercises
        </Button>
        <Typography 
        fontWeight={600} 
        fontSize='200px' color='#FF2625' sx={{
            opacity: 0.1,
            display: {lg: 'block',xs: 'none'}
        }} >
            Exercise
        </Typography>
        <img src={HeroBannerImage}  className='hero-banner-img' alt='hero logo'/>
    </Box> 
  )
}

export default HeroBanner