import { Box } from '@mui/material';
import React from 'react';
import { MediaRowTitle } from '../../components';

const ImageSliderBackdrop = ({movie}) => {
    return (
        <Box className="backdrop stacked">
            <img className="backdrop-image" src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`} alt="movie-backdrop"/>
            <MediaRowTitle title={movie?.title ? movie?.title : movie?.name}/>
        </Box>
    )
}

export default ImageSliderBackdrop;
