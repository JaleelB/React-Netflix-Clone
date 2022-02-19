import { Box, Grid, Button } from '@mui/material';
//import MediaScroller from './MediaScroller/MediaScroller';
import './Hero.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiComponents from '../../components/API/Api';
import MediaRowSection from "../../components/MediaRow/MediaRowSection";

const Hero = () => {

    const [trending, setTrending] = useState([]);
    useEffect(() => {
        axios
          .get(`${apiComponents[0]}${apiComponents[2].trending}`, {
            params: {
              api_key: apiComponents[1],
            },
          })
          .then((res) => setTrending(res.data.results));
      
    }, []);


    return (
        <Box id="hero" sx={{
                paddingLeft: 'calc(3.5vw + 24px)', 
                // background: '#131313',
                background: `url('https://www.pixel4k.com/wp-content/uploads/2019/07/spiderman-far-from-home-movie-4k_1562107247.jpg') no-repeat`,
                backgroundSize: 'cover'
            }}>
            <Box className="inner" sx={{width: '100%', height: '100%'}}>

                <Grid container spacing={2} sx={{height: '100%', width: '100%',margin: 0, display:'flex', alignContent: 'center'}}>
                    {/* <Grid item xs={6} sx={{
                        padding: '0 !important', margin: 'auto 0 0 0'
                    }}>
                        <Box className="media-details">
                            <Box className="media-details-inner">
                                <Box className="media-title">
                                    <Box className="media-studio"><h1>Marvel Studios</h1></Box>
                                    <Box className="media-name"><h2 className="big-heading">GUARDIANS OF THE GALAXY</h2></Box>
                                </Box>
                                <Box className="media-cta">
                                    <Button variant="outlined" sx={{color: "yellow", borderColor: "yellow"}}>SEE MOVIE DETAILS</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid> */}

                    <Grid item xs={12} sx={{padding: '0 !important',margin: '0'}}>
                        <MediaRowSection
                            title = "Trending Movies and TV Shows"
                            medias = {trending}
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    );
}

export default Hero;
