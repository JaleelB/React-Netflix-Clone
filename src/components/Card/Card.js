import { Box } from '@mui/material';
import React, { useState } from 'react';
import '../../Webpages/Hero/Hero.scss';


const Card = ({image, id}) => {

    const [isActive, setActive] = useState(false);
    const activeHandler = () => { setActive(!isActive); }

    return (
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
        </Box>
    )
}

export default Card;
