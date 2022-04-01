import { Box, Typography } from '@mui/material';
import React from 'react'

const FilterButtonIcon = ({setGenreID, genre, background, genreID}) => {


    return (
        <Box className="genre-icon" sx={{backgroundImage: `url(${background})`}} onClick={() => setGenreID(genreID)}>
            <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
            </Box>
        </Box>
    )
}

export default FilterButtonIcon;
