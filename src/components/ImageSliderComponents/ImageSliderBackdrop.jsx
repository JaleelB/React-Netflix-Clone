import { Box } from '@mui/material';
import React from 'react';
import { MediaRowTitle } from '../../components';

const ImageSliderBackdrop = ({movie, fullscreenProps}) => {

    const { setOpenFullscreenPopup,  setPosterID,  setMediaType, setNetflixOriginalShow } = fullscreenProps;

    const handleMediaType = () =>{ if (movie?.media_type) setMediaType(movie?.media_type); };

    return (
        <Box 
            className="backdrop stacked" 
            onClick={() => {
                handleMediaType();                    
                setPosterID(movie?.id);
                setOpenFullscreenPopup(true);
            }}
        >
            <img className="backdrop-image" src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`} alt="movie-backdrop"/>
            <MediaRowTitle title={movie?.title ? movie?.title : movie?.name}/>
        </Box>
    )
}

export default ImageSliderBackdrop;
