import React from 'react'
import {Typography, Stack, Box, Button} from '@mui/material'
import BodyPartImage from '../assets/assets/icons/body-part.png'
import EquipmentImage from '../assets/assets/icons/equipment.png'
import TargetImage from '../assets/assets/icons/target.png'
import Loader from './Loader'

const Details = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

  return (
    <Stack gap='60px' sx={{flexDirection: {lg: 'row' }, padding:'20px', alignItems: 'center'}}>
        {gifUrl ? (<img src={gifUrl} alt={name} loading='lazy'/>) : <Loader/>
    }
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
         <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
        <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                <img src={item.icon} alt={item.name}/>
                </Button>
            <Typography variant='h6' textTransform='capitalize'>
                {item.name}
            </Typography>
        </Stack>
    ))}
    </Stack>
    </Stack>
    
  )
}

export default Details