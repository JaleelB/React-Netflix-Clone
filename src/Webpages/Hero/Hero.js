import { Box, Button } from '@mui/material';
import React from 'react';
import MediaScroller from './MediaScroller/MediaScroller';
import './Hero.scss';

const Hero = () => {
    return (
        <Box id="hero" sx={{paddingLeft: 'calc(3.5vw + 24px)', background: `url('https://wallpapercave.com/wp/wp7653796.jpg') no-repeat`, backgroundSize: 'cover'}}>
            <Box className="media-details">
                <Box className="inner">
                    <Box className="media-studio"><h1>Marvel Studios</h1></Box>
                    <Box className="media-name"><h2 className="big-heading">GURADIANS OF THE GALAXY</h2></Box>
                    <Box className="media-cta">
                        <Button variant="outlined" sx={{color: "yellow", borderColor: "yellow"}}>SEE MOVIE DETAILS</Button>
                    </Box>
                </Box>
            </Box>

            <Box className="media-selection">
                <Box className="media-selection-inner">
                    {/* <Button>Movie Selections</Button> */}
                    <Box className="top-movie-selections">
                        <MediaScroller/>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Hero;
