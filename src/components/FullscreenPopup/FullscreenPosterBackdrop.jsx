import { Box, Typography, Button } from '@mui/material';
import { PlayArrow, ThumbDownOffAlt, ThumbUpOffAlt, AddCircleOutline, DoNotDisturbAltOutlined } from '@mui/icons-material';
import React from 'react';
import './FullscreenPopup.scss';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';


const FullscreenPosterBackdrop = ({backdrop, title}) => {

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        setDisablePointer, setFullscreenPlayer, fullscreenPlayer, fullVideoPath
    } = fullscreenProps.fullscreenProps;

    return (
        <Box className="popup-backdrop stacked">
            {backdrop && <img src={'https://image.tmdb.org/t/p/original/' + backdrop} alt=""/>}
            

            {window.innerWidth > 900 && <Box className="movie-title-button-action">

                {title && <Typography className="backdrop-title" variant="subtitle" component="h1">{title}</Typography>}
                 <Box className="button-container">

                    <Button 
                        className={`button-play ${!fullVideoPath ? 'disabled' : ''}`}
                        variant = {!fullVideoPath ? 'disabled' : ''}
                        onClick = {() => {
                            setDisablePointer(true);
                            setFullscreenPlayer(!fullscreenPlayer);
                        }}
                    >

                        { !fullVideoPath && <DoNotDisturbAltOutlined className="play-icon popup-icon"/>}
                        { !fullVideoPath &&  "No Videos Available" }

                        { fullVideoPath && <PlayArrow className="play-icon popup-icon"/>}
                        { fullVideoPath &&  "Play" }
                        

                    </Button>

                    <Box className="popup-icons">
                        {/* <AddCircleOutline className="popup-icon"/>   */}
                        <Button
                                className="popup-icon add" 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M32 16v32m16-16H16"></path>
                                </svg>
                        </Button>
                        <ThumbUpOffAlt className="popup-icon like"/>
                        <ThumbDownOffAlt className="popup-icon dislike"/>
                    </Box>
                    
                </Box>

            </Box>}
            
            
        </Box>
    )
}

export default FullscreenPosterBackdrop;
