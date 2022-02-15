import { Box, Grid, Button } from '@mui/material';
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
                background: `url('https://wallpapercave.com/wp/wp7653796.jpg') no-repeat`,
                backgroundSize: 'cover'
            }}>
            <Box className="inner" sx={{border: '1px solid purple', width: '100%', height: '100%'}}>

                <Grid container spacing={2} sx={{height: '100%', width: '100%',margin: 0}}>
                    <Grid item xs={6} sx={{
                        border: '1px solid orange', padding: '0 !important', margin: 'auto 0 0 0'
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
                    </Grid>

                    <Grid item xs={12} sx={{padding: '0 !important',margin: 'auto 0 0 0'}}>
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
