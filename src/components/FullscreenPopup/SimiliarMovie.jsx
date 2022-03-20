import { Box } from '@mui/material';
import React from 'react'

const SimiliarMovie = ({posterPath}) => {
    return (
        <Box className="similar-poster">
            <img src={posterPath} alt=""/>
        </Box>
    )
}

export default SimiliarMovie;
