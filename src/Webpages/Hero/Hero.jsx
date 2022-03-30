import { Box } from '@mui/material';
import './Hero.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

const Hero = ({fullscreenProps}) => {
    
    const [originals, setOriginals] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [actionThriller, setActionThriller] = useState([]);
    const [newReleases, setNewReleases] = useState([]);
   
    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].originals}?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setOriginals(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].popular}?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setPopular(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].trending}/week?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setTrending(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setTopRated(res.data.results)
        })
        .catch(error => { console.log(error) })
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&with_networks=213&with_genres=28&53&12`)
        .then((res)=> {
            setActionThriller(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].latest_releases}?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setNewReleases(res.data.results)
        })
        .catch(error => { console.log(error) })
  
    }, []);


    const { disablePointer, fullscreenPlayer, openFullscreenPopup } = fullscreenProps;

    const mediaTypeMovie = 'movie';
    const mediaTypeTv = 'tv';
  
    return (
        <Box id="hero">
           
            <Billboard disablePointer={disablePointer} movie = {originals[2]} fullscreenProps={fullscreenProps}/>

            <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                <MediaRowContainer
                    title = "Netflix Original Shows"
                    medias = { originals }
                    fullscreenProps = { fullscreenProps } 
                    netflixOriginal
                    typeMedia={mediaTypeTv}
                />
                <MediaRowContainer
                    title = "Most Users Loved These Shows"
                    medias = { popular }
                    fullscreenProps = { fullscreenProps } 
                    typeMedia={mediaTypeMovie}
                />
                <MediaRowContainer
                    title = "Trending Now"
                    medias = { trending }
                    fullscreenProps = { fullscreenProps } 
                    typeMedia={mediaTypeMovie}
                />
                <MediaRowContainer
                    title = "New Releases"
                    medias = { newReleases }
                    fullscreenProps = { fullscreenProps } 
                    typeMedia={mediaTypeMovie}
                />
                <MediaRowContainer
                    title = "Most Loved Shows Of All Time"
                    medias = { topRated }
                    fullscreenProps = { fullscreenProps } 
                    typeMedia={mediaTypeMovie}
                />
                <MediaRowContainer
                    title = "Action Thrillers"
                    medias = { actionThriller }
                    fullscreenProps = { fullscreenProps } 
                    typeMedia={mediaTypeMovie}
                />
    
            </Box>

            {
                fullscreenPlayer && 
                
                    <FullscreenPlayer
                        fullscreenProps = {fullscreenProps}
                    />
            }

            {
                openFullscreenPopup && 
                <FullscreenPopup
                    fullscreenProps = { fullscreenProps }
                />

            }

            <Footer/>
            
        </Box>
    );
}

export default Hero;
