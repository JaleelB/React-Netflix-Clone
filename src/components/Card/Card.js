import { Box } from '@mui/material';
import React, { useState } from 'react';
import '../../Webpages/Hero/Hero.scss';


<<<<<<< HEAD
const Card = ({image}) => {
=======
const Card = ({image, id}) => {
>>>>>>> 1af6197b77817961a76f7e866de4e5193957f66e

    const [isActive, setActive] = useState(false);
    const activeHandler = () => { setActive(!isActive); }

    return (
<<<<<<< HEAD
        <Box className='card' onclick={activeHandler} sx={{
            display: 'grid', placeItems: 'center',
            width: '100%', height: '100%',
            background: 'transparent', borderRadius: '15px'
        }}>
            <img className={isActive ? "active" : ""} style={{inlineSize: '100%', height: '100%', aspectRation: '1.9 / 1', objectFit:'cover', borderRadius: '15px'}} src={image} alt='movie-poster'/>
=======
        <Box 
            id={id}
            className='card' 
            onMouseEnter={() => activeHandler()}
            onMouseLeave={() => activeHandler()}
            sx={{
                display: 'grid', placeItems: 'center',
                width: '100%', height: '100%',
                background: 'transparent', borderRadius: '15px'
            }}
        >
            <img className={isActive ? "active" : "inactive"} style={{inlineSize: '100%', height: '100%', aspectRation: '1.9 / 1', objectFit:'cover', borderRadius: '15px'}} src={image} alt='movie-poster'/>
>>>>>>> 1af6197b77817961a76f7e866de4e5193957f66e
        </Box>
    )
}

export default Card;
