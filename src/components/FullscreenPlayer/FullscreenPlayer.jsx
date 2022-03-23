import { ArrowBack } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import './FullscreenPlayer.scss';

const FullscreenPlayer = ({fullscreenProps}) => {

    const fullVideoCanvas = useRef(null);
    const[fullVideoWidth, setFullVideoWidth] = useState();
    const[fullVideoHeight, setFullVideoHeight] = useState();

    const {
        fullscreenPlayer, setFullscreenPlayer, fullVideoPath
    } = fullscreenProps;

    const handleWindowResize = () => { 

        if(fullVideoCanvas && fullVideoCanvas.current){
            const width = fullVideoCanvas.current.clientWidth;
            const height = fullVideoCanvas.current.clientHeight;
            setFullVideoWidth(width);
            setFullVideoHeight(height); 
        }
    }

    useEffect(() => { handleWindowResize(); }, []);
    useEffect(() => { 
        window.addEventListener("resize", handleWindowResize); 
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    

    return (

            <Box className='fullscreen-video-wrapper' ref={fullVideoCanvas} >
                <ArrowBack 
                    className="back-arrow"
                    style={{left: window.innerWidth < window.innerHeight && `${window.innerWidth - 45}px`, transform: window.innerWidth < window.innerHeight && 'rotate(90deg)', zIndex: window.innerWidth < window.innerHeight && 4 }}
                    onClick={() => {
                        setFullscreenPlayer(!fullscreenPlayer);
                        // setOpenFullscreenPopup(true);
                    }}
                />
                { fullVideoPath && 
                            <ReactPlayer
                                className={`fullscreen-video-player ${window.innerWidth < window.innerHeight ? 'mobile-rotate' : ''}`}
                                url={`https://www.youtube.com/embed/${fullVideoPath}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`}
                                width={ window.innerWidth < window.innerHeight ? fullVideoHeight + 10: fullVideoWidth}
                                height={window.innerWidth < window.innerHeight ? fullVideoWidth : fullVideoHeight}
                                config={{
                                    youtube: {
                                    playerVars: { 
                                        showinfo: 0,
                                        disablekb: 1 
                                        }
                                    }
                                }}
                                volume={1}
                                controls={false}
                                playing={true}
                            />   
                } 

                { !fullVideoPath &&
                    <Box className="player-error-message">
                        <Typography variant="h3" component="h3"> There are no trailers available for the selected media at this time</Typography>
                    </Box>
                }        
            </Box>
    )
}

export default FullscreenPlayer;
