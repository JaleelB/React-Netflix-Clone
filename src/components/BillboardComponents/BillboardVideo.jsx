import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
// import YouTube from 'react-youtube';
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
    useEffect(() => { window.addEventListener("resize", handleWindowResize); }, []);

    return (
        <Box className="billboard__video-wrapper" ref={videoCanvas} >

             { source && <ReactPlayer
                            className='billboard__video-container'
                            url={`https://www.youtube.com/watch?v=${source}?modestbranding=1&showinfo=0`}
                            width={videoWidth}
                            height={videoHeight}
                            config={{
                                youtube: {
                                  playerVars: { showinfo: 0 }
                                }
                              }}
                            playing={playState}
                            volume='1'
                            muted={muteStatus}
                        /> }           
        </Box>
    )
}

export default BillboardVideo;
