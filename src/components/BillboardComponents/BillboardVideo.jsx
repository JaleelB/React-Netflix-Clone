import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const BillboardVideo = ({source}) => {

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

    useEffect(() => { handleWindowResize(); }, [videoCanvas.current]);
    useEffect(() => { window.addEventListener("resize", handleWindowResize); }, []);
    
    const opts = {
        height: `${videoHeight}`,
        width: `${videoWidth}`,
        playerVars: {
          autoplay: 1,
        },
    };

    return (
        <Box className="billboard__video-wrapper" ref={videoCanvas} >
            {source && <YouTube videoId={source}  containerClassName={'billboard__video'} opts={opts} title=''/>}
        </Box>
    )
}

export default BillboardVideo;
