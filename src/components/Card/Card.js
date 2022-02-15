import { Box } from '@mui/material';
import React, { useState } from 'react';
import '../../Webpages/Hero/Hero.scss';


const Card = ({image, id}) => {

    const [isActive, setActive] = useState(false);
    const activeHandler = () => {
        setActive(!isActive); 
       
    }

    return (
        <Box 
            id={id}
            className='card' 
            // onMouseEnter={() =>  setTimeout(() => {activeHandler()}, 800) }
            // onMouseLeave={() => activeHandler()}
            onClick={() => activeHandler()}
            sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '60%',
                background: 'grey', borderRadius: '15px'
            }}
        >
            <img className={isActive ? "active" : "inactive"} 
                style={{
                    width: '100%', height: '100%', 
                    aspectRation: '1.9 / 1', 
                    // objectFit:'cover', inlineSize: '100%',
                    borderRadius: '15px'
                }} 
                src={image} 
                alt='movie-poster'
            />
        </Box>
    )
}

export default Card;
