import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';

const FilterButtonIcon = ({setGenreID, genre, background, genreID, icons}) => {

    const [activeGenre, setActiveGenre] = useState(false);
    const iconRef = useRef(null);

    const handleActiveGenre = (event) => {
        // if(event.target.classList.contains( "active" )) setActiveGenre(false);
        // else{
        //     setActiveGenre(true);
        // }
        if(activeGenre && !event.target.classList.contains( "active" )){
            setActiveGenre(false);
            // event.target.className+="active";
        }
        // else if(!activeGenre){
        //     setActiveGenre(true);
            
        // }
    };

    return (
        <Box 
            ref = {iconRef}
            onLoad = { () => {
                icons.push(iconRef.current);
                console.log(icons);
            }}
            className={`genre-icon ${activeGenre ? 'active' : ''}`}
            sx={{backgroundImage: `url(${background})`}} 
            onClick={(e) => {
                setGenreID(genreID); 
                setActiveGenre(true);
                handleActiveGenre(e);
                // setActiveGenre(true);
            }}
        >
            <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
            </Box>
        </Box>
    )
}

export default FilterButtonIcon;
