import { Box } from '@mui/material';
import React from 'react'

const HeaderVideo = ({source}) => {
    return (
        <Box className="header-video-wrapper" sx={{display: {xs: 'none', lg: 'block'}}}>
            <video autoplay muted loop id="header-video">
                <source src={source} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </Box>
    )
}

export default HeaderVideo;
