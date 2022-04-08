import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';

const FilterButtonIcon = ({setGenreID, genre, background, genreID}) => {



    return (
        <Box 
            className={`genre-icon`}
            sx={{backgroundImage: `url(${background})`}} 
            onClick={() => {
                setGenreID(genreID); 
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}
        >
            <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
            </Box>
        </Box>
    )
}

export default FilterButtonIcon;
