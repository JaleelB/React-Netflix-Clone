import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, IconButton, Typography } from '@mui/material';
import {BillboardTitle, BillboardDescription, BillboardVideo } from '../../components';
import {apiComponents} from '../../components';
import './Billboard.scss';
import { PlayArrow, Pause, VolumeOff, VolumeUp,  AddIcCallOutlined, Add } from '@mui/icons-material';

const Billboard = ({movie}) => {

    
    const [videoPath, setVideoPath] = useState('');
    const [videoPlay, setVideoPlay] = useState(true);
    const [volumeMute, setVolumeMute] = useState(true);
    const[deviceWindowWidth, setDeviceWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => { setDeviceWindowWidth(window.innerWidth) }

    useEffect(()=>{
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    },[]);

   
    useEffect(() => {

        // const movieId = movie?.id;

        // axios
        // .get(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiComponents[1]}&language=en-US`)
        // .then((res)=> {
        //     setVideoPath(res.data.results[0]?.key)
        // })

        // async function fetchData() {
        //     const request = await axios.get(`https://api.themoviedb.org/3/tv/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`);
        //     setVideoPath(request.data.results[0]?.key);
        //     return request;
        // }
        // fetchData();

        const getMovie = async () => {
            try{
                axios
                .get(`https://api.themoviedb.org/3/tv/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`)
                .then((res)=> {
                    setVideoPath(res.data.results[0]?.key);
                })
            } catch(err){ console.log(err); }

        };

        getMovie();

    }, [movie?.id]);


    
    return (
        //use fuse js for live searching an array for search tab of projecct
        <Box className="billboard stacked" 
        sx={{ background: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}
        >
            {/* 
                remove background and an image for the hero background. 
                render it when screen size is small or when video has ended 
            */}
            <Box className="billboard__fade-top"></Box>

            {deviceWindowWidth > 1200 && videoPath ? <BillboardVideo source={videoPath} playState={videoPlay} muteStatus={volumeMute}/> : null }

            <Box className="billboard__cta-text-wrapper">

                    <BillboardTitle title={movie?.name}/>
  
                    <Box className="billboard__supplemental-wrapper" sx={{display: 'flex', gap: '1rem'}}>
                        <img className="netflix-icon" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/>
                        <Typography className="billboard__supplemental-message" sx={{color :'#fff'}}>Netflix Original</Typography>
                    </Box>

                    {deviceWindowWidth >= 601 && <BillboardDescription description={movie?.overview}/>}
                    
                    <Box className="billboard__button-container" >
                        {deviceWindowWidth >= 1200 && <>
                            <Button 
                                className="billboard__button-play"
                                onClick = {()=> setVideoPlay(!videoPlay)}
                            >
                                    { videoPlay ?  <Pause className="billboard__button-play-icon"/> : <PlayArrow className="billboard__button-play-icon"/> }
                                    { videoPlay ? 'Pause Trailer' : 'Play Trailer' }
                            </Button>
                            <Button variant="outlined" className="billboard__button-details">View Info</Button>
                        </> }

                        {deviceWindowWidth < 1200 && <>
                            <Button className="billboard__button-play">
                                <PlayArrow className="billboard__button-play-icon"/>
                                Play
                            </Button>
                            <Button variant="outlined" className="billboard__button-details">
                                <Add/>
                                My List 
                            </Button>
                        </> }

                    </Box> 
            </Box> 

            {deviceWindowWidth > 1200 && 
                <Box className="billboard__volume-rating-conatiner">
                    <IconButton className="billboard__volume-toggle" onClick={()=> setVolumeMute(!volumeMute)}>
                        { volumeMute ? <VolumeOff className="billboard__volume-icon"/> : <VolumeUp className="billboard__volume-icon"/> }
                    </IconButton>
                    <Box className="billboard__maturity-rating">TV-14</Box>
                </Box>
            }

            <Box className="billboard__fade-bottom"></Box> 
           
        </Box>
    )
}

export default Billboard;

