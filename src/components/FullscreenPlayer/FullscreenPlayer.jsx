import { ArrowBack, VolumeDown, VolumeUp } from '@mui/icons-material';
import { Box, Typography, Slider, Stack } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import './FullscreenPlayer.scss';

const FullscreenPlayer = () => {

    const fullVideoCanvas = useRef(null);
    const [fullVideoWidth, setFullVideoWidth] = useState();
    const [fullVideoHeight, setFullVideoHeight] = useState();

    const fullscreenProps = useFullscreenPropsContext();

    const {
        fullscreenPlayer, setFullscreenPlayer, fullVideoPath,
        volume, setVolume
    } = fullscreenProps.fullscreenProps;

    const handleWindowResize = () => {

        if (fullVideoCanvas && fullVideoCanvas.current) {
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


    const handleVolumeChange = (event, newValue) => {  setVolume(newValue); };

    return (

        <Box className='fullscreen-video-wrapper' ref={fullVideoCanvas} >
            <ArrowBack
                className="back-arrow"
                style={{ left: window.innerWidth < window.innerHeight && fullVideoPath && `${window.innerWidth - 45}px`, transform: window.innerWidth < window.innerHeight && fullVideoPath && 'rotate(90deg)', zIndex: window.innerWidth < window.innerHeight && fullVideoPath && 4 }}
                onClick={() => {
                    setFullscreenPlayer(!fullscreenPlayer);
                    // setVolume(1);
                }}
            />

                {fullVideoPath &&
                    <Box 
                        className="video-player-controls" 
                        style={{ 
                            position: window.innerWidth < window.innerHeight && fullVideoPath && 'absolute', 
                            bottom: window.innerWidth < window.innerHeight && fullVideoPath && `${window.innerHeight - 140}px`, 
                            zIndex: window.innerWidth < window.innerHeight && fullVideoPath && 4,
                            transform: window.innerWidth < window.innerHeight && fullVideoPath && 'rotate(90deg)',
                            left: window.innerWidth < window.innerHeight && fullVideoPath && `${window.innerWidth * -0.2}px`
                        }}
                    >

                        <Box className="volume-slider-controls">
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                <VolumeDown />
                                <Slider
                                    aria-label="Volume"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    sx={{ color: "#E50914" }}
                                    defaultValue={1}
                                    step={0.1}
                                    max={1}
                                />
                                <VolumeUp />
                            </Stack>
                        </Box>

                    </Box>
                }

            

            { fullVideoPath &&
                <ReactPlayer
                    className={`fullscreen-video-player ${window.innerWidth < window.innerHeight ? 'mobile-rotate' : ''}`}
                    url={`https://www.youtube.com/embed/${fullVideoPath}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`}
                    width={window.innerWidth < window.innerHeight ? fullVideoHeight : fullVideoWidth}
                    height={window.innerWidth < window.innerHeight ? fullVideoWidth : fullVideoHeight}
                    // width='100%'
                    // height='100%'
                    config={{
                        youtube: {
                            playerVars: {
                                showinfo: 0,
                                disablekb: 1
                            }
                        }
                    }}
                    volume={volume}
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
