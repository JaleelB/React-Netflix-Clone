import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, IconButton, Typography } from '@mui/material';
import {BillboardTitle, BillboardDescription, BillboardVideo, apiComponents } from '../../components';
import './Billboard.scss';
import { PlayArrow, Pause, VolumeOff, VolumeUp, Add, DoNotDisturbAltOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Billboard = ({movie, disablePointer, fullscreenProps, sectionTitle, genreTitle, setGenreTitle, mediaType}) => {
    
    const [videoPath, setVideoPath] = useState('');
    const [videoPlay, setVideoPlay] = useState(true);
    const [volumeMute, setVolumeMute] = useState(true);
    const[deviceWindowWidth, setDeviceWindowWidth] = useState(window.innerWidth);

    const {
        setFullscreenPlayer, setPosterID, setFullVideoPath, posterID, setOpenFullscreenPopup, setMediaType
    } = fullscreenProps;

    const handleWindowResize = () => { setDeviceWindowWidth(window.innerWidth) }

    useEffect(()=>{
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    },[]);

   
    useEffect(() => {

        if(window.innerWidth > 1200){

            if(mediaType==="tv"){
                axios
                .get(`${apiComponents[0]}${apiComponents[2].tv}/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`)
                .then((res)=> {
                    setVideoPath(res.data.results[0]?.key)
                })
                .catch(error => { console.log(error) })
            }

            if(mediaType==="movie"){
                axios
                .get(`${apiComponents[0]}${apiComponents[2].movie}/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`)
                .then((res)=> {
                    setVideoPath(res.data.results[0]?.key)
                })
                .catch(error => { console.log(error) })
            }
        }

    }, [movie?.id, mediaType]);

    useEffect(() => {
        if(window.innerWidth > 1200){

            if(mediaType==="tv"){
                axios
                .get(`${apiComponents[0]}${apiComponents[2].tv}/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`)
                .then((res)=> {
                    setFullVideoPath(res.data.results[0]?.key)
                })
                .catch(error => { console.log(error) })
            }

            if(mediaType==="movie"){
                axios
                .get(`${apiComponents[0]}${apiComponents[2].movie}/${movie?.id}/videos?api_key=${apiComponents[1]}&language=en-US`)
                .then((res)=> {
                    setFullVideoPath(res.data.results[0]?.key)
                })
                .catch(error => { console.log(error) })
            }
        } 

    }, [posterID,setFullVideoPath,movie?.id, mediaType]);


    return (

        <Box className={`billboard stacked ${disablePointer ? 'disable-pointer' : ''}`}
            sx={{ background: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}}
            onLoad={ ()=> setPosterID(movie?.id) }
        >

            <Box className="billboard__fade-top"></Box>

            {deviceWindowWidth > 1200 && videoPath ? <BillboardVideo source={videoPath} playState={videoPlay} muteStatus={volumeMute}/> : null }

            {deviceWindowWidth > 1200 && sectionTitle &&
                <Box className="billboard__section-title-wrapper" sx={{display: genreTitle && "flex"}}>
                    <Link 
                        to={`/${sectionTitle}`}
                        onClick={ () => setGenreTitle('') }
                    >
                        <span className={`section-title ${genreTitle ? "bread-crumb" : ""}`}>{`${sectionTitle} ${genreTitle ? "> " : ""}`}</span>
                    </Link>
                        {genreTitle && <span className="section-title">{genreTitle}</span>}
                </Box>
            } 

            <Box className="billboard__cta-text-wrapper">

                    <BillboardTitle title={movie?.name ? movie?.name : movie?.title}/>
  
                    <Box className="billboard__supplemental-wrapper" sx={{display: 'flex', gap: '1rem'}}>
                        <img className="netflix-icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="Netflix Icon"/>
                        <Typography className="billboard__supplemental-message" sx={{color :'#fff'}}>Netflix Original</Typography>
                    </Box>

                    {deviceWindowWidth >= 601 && <BillboardDescription description={movie?.overview}/>}
                    
                    <Box className="billboard__button-container" >
                        {deviceWindowWidth >= 1200 && <>
                            <Button 
                                className={`billboard__button-play ${!videoPath ? 'disabled' : ''}`}
                                variant={!videoPath ? 'disabled' : ''}
                                onLoad = {()=> { if(!videoPath) setVideoPlay(false) } }
                                onClick = {()=> setVideoPlay(!videoPlay)}
                            >
                                    { !videoPath ?  <DoNotDisturbAltOutlined className="billboard__button-play-icon"/> : "" }
                                    { videoPath && videoPlay ?  <Pause className="billboard__button-play-icon"/> : "" }
                                    { videoPath && !videoPlay ? <PlayArrow className="billboard__button-play-icon"/> : "" }
                                    
                                    { !videoPath ? "No Video Available" : ""}
                                    { videoPath && videoPlay ? 'Pause Trailer' : ""}
                                    { videoPath && !videoPlay ? 'Play Trailer' : ""}
                                    
                            </Button>
                            <Button 
                                variant="outlined" 
                                className="billboard__button-details"
                                onClick={()=> {
                                    setPosterID(movie?.id);
                                    setMediaType(mediaType);
                                    setOpenFullscreenPopup(true);
                                }}
                            >
                                View Info 
                            </Button>
                        </> }

                        {deviceWindowWidth < 1200 && <>
                            <Button 
                                className="billboard__button-play" 
                                onClick={()=> {
                                    setPosterID(movie?.id);
                                    setFullscreenPlayer(true);
                                }}
                            >
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
                    <IconButton 
                        className="billboard__volume-toggle" 
                        onClick={ ()=> setVolumeMute(!volumeMute) }
                    >
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

