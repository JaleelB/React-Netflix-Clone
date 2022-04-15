import { Box } from '@mui/material';
import React from 'react';
import { MediaRowTitle } from '../../components';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';

const ImageSliderBackdrop = ({movie}) => {

    const fullscreenProps = useFullscreenPropsContext();
    const { setOpenFullscreenPopup,  setPosterID, handleMediaType } = fullscreenProps.fullscreenProps;

    const updateMediaType = () =>{ if (movie?.media_type) handleMediaType(movie?.media_type); };

    return (
        <Box 
            className="backdrop stacked" 
            onClick={() => {
                updateMediaType();                    
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
