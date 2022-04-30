import { Box } from '@mui/material';
import React, {  useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';


const BillboardVideo = ({source, playState, muteStatus}) => {

    const videoCanvas = useRef(null);
    const fullscreenProps = useFullscreenPropsContext();
    const {  fullscreenPlayer } = fullscreenProps.fullscreenProps;

    return (
        <Box className="billboard__video-wrapper" ref={videoCanvas} >

             { source && <ReactPlayer
                            className='billboard__video-container'
                            url={`https://www.youtube.com/embed/${source}?modestbranding=1&rel=0&fs=0&autohide=1&showinfo=0&controls=0`}
                            width='100%'
                            height='100%'
                            config={{
                                youtube: {
                                  playerVars: { 
                                      showinfo: 0,
                                      disablekb: 1 
                                    }
                                }
                              }}
                            playing={fullscreenPlayer ? !playState : playState}
                            volume={1}
                            muted={muteStatus}
                            controls={false}
                            loop={true}
                        /> }           
        </Box>
    )
}

export default BillboardVideo;
