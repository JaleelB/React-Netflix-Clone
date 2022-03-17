import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube'


const BillboardVideo = ({source, playState, muteStatus}) => {

    const videoCanvas = useRef(null);
    const[videoWidth, setVideoWidth] = useState();
    const[videoHeight, setVideoHeight] = useState();

    const handleWindowResize = () => { 

        if(videoCanvas && videoCanvas.current){
            const width = videoCanvas.current.clientWidth;
            const height = videoCanvas.current.clientHeight;
            setVideoWidth(width);
            setVideoHeight(height); 
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
        <Box className="billboard__video-wrapper" ref={videoCanvas} >

             { source && <ReactPlayer
                            className='billboard__video-container'
                            // url={`https://www.youtube.com/ watch?v=${source}?modestbranding=1&showinfo=0&rel=0&fs=0`}
                            url={`https://www.youtube.com/embed/${source}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`}
                            width={videoWidth}
                            height={videoHeight}
                            config={{
                                youtube: {
                                  playerVars: { 
                                      showinfo: 0,
                                      disablekb: 1 
                                    }
                                }
                              }}
                            playing={playState}
                            volume={1}
                            muted={muteStatus}
                            controls={false}
                            loop={true}
                        /> }           
        </Box>
    )
}

export default BillboardVideo;
