import { Box, Grid } from '@mui/material';
import './Hero.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiComponents from '../../components/API/Api';
import MediaRowSection from "../../components/MediaRow/MediaRowSection";

const Hero = ({mood}) => {
    const [activeBackground, setActiveBackground] = useState(''); 
    const [discoverMovies, setDiscoverMovies] = useState([]);
    const [discoverTvShows, setDiscoverTvShows] = useState([]);
   
    useEffect(() => {
        let genre_filters = '';

        switch(mood){
            case "Love, Family & Laughter":
                genre_filters = '10751|10749|35|16|10402|10762'
                break;

            case "Fantasy":
                genre_filters = '14|10765'
                break;

            case "Discovery & Exploration":
                genre_filters = '878|99|36|10763'
                break;

            case "Drama":
                genre_filters = '18|10766|10767|10764'
                break;

            case "Thriller & Suspense":
                genre_filters = '28|12|10759|27|80|10752|10768|37|53|9648'
                break;
            
            default:
                genre_filters = '28|12|35|80|27'
                break;
            
        }

        axios
            .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&with_genres=${genre_filters}`)
            .then((res) => {setDiscoverMovies(res.data.results) })
            .catch(error => { console.log(error) })

        axios
            .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&with_genres=${genre_filters}`)
            .then((res) => {setDiscoverTvShows(res.data.results) })
            .catch(error => { console.log(error) })

  
    }, [mood]);

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
                            title = "Discover Movies and TV Shows Based On Your Mood"
                            medias = {[...discoverMovies,...discoverTvShows]}
                            changeBackground = {handleBackgroundChange}
                            userMood = {mood}
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    );
}

export default Hero;
