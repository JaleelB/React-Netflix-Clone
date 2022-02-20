import { Box, Grid } from '@mui/material';
import './Hero.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiComponents from '../../components/API/Api';
import MediaRowSection from "../../components/MediaRow/MediaRowSection";

const Hero = () => {
    const [activeBackground, setActiveBackground] = useState([]); 
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

    const handleBackgroundChange = (background) => {setActiveBackground(background);}


    return (
        <Box id="hero" sx={{
                paddingLeft: 'calc(3.5vw + 24px)', 
                // background: '#131313',
                background: `url(${activeBackground}) no-repeat `,
                backgroundSize: 'cover'
            }}>
            <Box className="inner" sx={{width: '100%', height: '100%'}}>

                <Grid container spacing={2} sx={{height: '100%', width: '100%',margin: 0, display:'flex', alignContent: 'center'}}>

                    <Grid item xs={12} sx={{padding: '0 !important',margin: '0'}}>
                        <MediaRowSection
                            title = "Trending Movies and TV Shows Based On Your Mood"
                            medias = {trending}
                            changeBackground = {handleBackgroundChange}
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    );
}

export default Hero;
