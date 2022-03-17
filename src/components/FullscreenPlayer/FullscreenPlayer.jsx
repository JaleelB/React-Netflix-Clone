import { ArrowBack } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import './FullscreenPlayer.scss';

const FullscreenPlayer = ({fullscreenPlayerProps}) => {

    const fullVideoCanvas = useRef(null);
    const[fullVideoWidth, setFullVideoWidth] = useState();
    const[fullVideoHeight, setFullVideoHeight] = useState();

    const {
        fullscreenPlayer, setFullscreenPlayer, fullVideoPath, posterID
    } = fullscreenPlayerProps;

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

    console.log(`https://www.youtube.com/embed/${fullVideoPath}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`);

    return (
        
        <Box className="fullscreen-video-wrapper" ref={fullVideoCanvas} >
            <ArrowBack 
                className="back-arrow"
                onClick={() => setFullscreenPlayer(!fullscreenPlayer)}
            />
             { fullVideoPath && <ReactPlayer
                            className='fullscreen-video-player'
                            // url={`https://www.youtube.com/ watch?v=${source}?modestbranding=1&showinfo=0&rel=0&fs=0`}
                            url={`https://www.youtube.com/embed/${fullVideoPath}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`}
                            width={fullVideoWidth}
                            height={fullVideoHeight}
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
                        /> }           
        </Box>

    )
}

export default FullscreenPlayer;
