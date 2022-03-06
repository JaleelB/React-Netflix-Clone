import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import {BillboardTitle, BillboardDescription, BillboardVideo } from '../../components';
import {apiComponents} from '../../components';
import './Billboard.scss';

const Billboard = ({movie}) => {

    
    const [videoPath, setVideoPath] = useState('');
    const[deviceWindowWidth, setDeviceWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => { setDeviceWindowWidth(window.innerWidth) }

    useEffect(()=>{
        window.addEventListener('resize', handleWindowResize);
    },[]);

   
    useEffect(() => {

        // const movieId = movie?.id;

        // axios
        // .get(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiComponents[1]}&language=en-US`)
        // .then((res)=> {
        //     setVideoPath(res.data.results[0]?.key)
        // })

        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/tv/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`);
            setVideoPath(request.data.results[0]?.key);
            return request;
        }
        fetchData();

    }, [movie?.id]);


    
    return (
        //use fuse js for live searching an array for search tab of projecct
        <Box className="billboard stacked" 
        sx={{ background: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}
        >
            
            <Box className="billboard__fade-top"></Box>

            {deviceWindowWidth > 758 && videoPath ? <BillboardVideo source={videoPath}/> : null }

            <Box className="billboard__cta-text-wrapper">

                    <BillboardTitle title={movie?.name}/>
  
                    <Box className="billboard__supplemental-wrapper" sx={{display: 'flex', gap: '1rem'}}>
                        <img className="netflix-icon" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/>
                        <Typography className="billboard__supplemental-message" sx={{color :'#fff'}}>Netflix Original</Typography>
                    </Box>

                    {deviceWindowWidth > 601 && <BillboardDescription description={movie?.overview}/>}
                    
                    <Box className="billboard__button-container" >
                       <Button 
                            variant="outlined" 
                            className="billboard__button-play"
                            // onClick = {() =>  {
                            //     console.log('hgfds')
                            //     return <BillboardVideo source={videoPath}/>
                            // }}
                        >
                                <svg className="billboard__button-play-icon Hawkins-Icon Hawkins-Icon-Standard" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                    </svg>
                                Play Trailer
                        </Button>
                        <Button variant="outlined" className="billboard__button-details">View Info</Button>
                    </Box> 
            </Box> 
            <Box className="billboard__fade-bottom"></Box>
           
        </Box>
    )
}

export default Billboard;

