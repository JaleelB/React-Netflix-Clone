import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import {HeaderTitle, HeaderDescription, HeaderVideo } from '../../components';
import {apiComponents} from '../../components';
import './Header.scss';

const Header = ({movie}) => {

    // const handleObjectNameKey = (object)=>{
    //     let value =  ('name' in object) ? 'name' : 'title';
    //     return value;
    // };
    // const movieId = movie.id;
    const [videoPath, setVideoPath] = useState('');

    //http://api.themoviedb.org/3/movie/157336/videos?api_key=###
   
    // useEffect(() => {

    //     axios
    //     .get(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiComponents[1]}&language=en-US`)
    //     .then((res)=> {
    //         setVideoPath(res.data.results)
    //     })

    // }, [movieId]);

    // console.log(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiComponents[1]}&language=en-US`); 

    return (
        
        <Box className="header" sx={{ background: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}>
            <Box className="header-cta-text-wrapper">
                    {/* <HeaderTitle title={movie['title'] !== undefined ? movie?.title : movie?.name}/> */}
                    {/* <HeaderTitle title={movie[handleObjectNameKey(movie)]}/> */}
                    {/* <HeaderTitle title={movie}/> */}

                    {/* <HeaderVideo source={``}/> */}
                    
                    <HeaderDescription description={movie?.overview}/>
                    <Box className="header-button-container" id="button-container">
                       <Button variant="outlined" className="header-button-play">
                           <svg className="header-button-play-icon Hawkins-Icon Hawkins-Icon-Standard" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                            </svg>
                           Play Trailer
                        </Button>
                        <Button variant="outlined" className="header-button-details">View Info</Button>
                    </Box> 
                    <Box className="header-fade-bottom"></Box>
            </Box> 
           
        </Box>
    )
}

export default Header;

