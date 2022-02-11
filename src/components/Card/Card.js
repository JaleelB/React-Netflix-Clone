import { Box } from '@mui/material';
import React from 'react';
import '../../Webpages/Hero/Hero.scss';


const Card = ({image}) => {
    return (
        <Box className='card' sx={{
            display: 'grid', placeItems: 'center',
            width: '100%', height: '100%',
            background: 'transparent', borderRadius: '15px'
        }}>
            <img style={{inlineSize: '100%', height: '95%', aspectRation: '1.9 / 1', objectFit:'cover', borderRadius: '15px'}} src={image} alt='movie-poster'/>
        </Box>
    )
}

export default Card;
