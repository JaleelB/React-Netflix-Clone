import { Box, Typography, Button } from '@mui/material';
import { PlayArrow, ThumbDownOffAlt, ThumbUpOffAlt, AddCircleOutline } from '@mui/icons-material';
import React from 'react';
import './FullscreenPopup.scss';

const FullscreenPosterBackdrop = ({backdrop, title, fullscreenProps}) => {

    const { 
        setDisablePointer, setFullscreenPlayer, fullscreenPlayer
    } = fullscreenProps;

    return (
        <Box className="popup-backdrop stacked">
            {backdrop && <img src={'https://image.tmdb.org/t/p/original/' + backdrop} alt=""/>}
            

            {window.innerWidth > 900 && <Box className="movie-title-button-action">

                {title && <Typography className="backdrop-title" variant="subtitle" component="h1">{title}</Typography>}
                 <Box className="button-container">

                    <Button 
                        className="button-play"
                        onClick = {() => {
                            setDisablePointer(true);
                            setFullscreenPlayer(!fullscreenPlayer);
                        }}
                    >

                        <PlayArrow className="play-icon popup-icon"/>
                        Play

                    </Button>

                    <Box className="popup-icons">
                        <AddCircleOutline className="popup-icon"/>
                        <ThumbUpOffAlt className="popup-icon"/>
                        <ThumbDownOffAlt className="popup-icon"/>
                    </Box>
                    
                </Box>

            </Box>}
            
            
        </Box>
    )
}

export default FullscreenPosterBackdrop;
