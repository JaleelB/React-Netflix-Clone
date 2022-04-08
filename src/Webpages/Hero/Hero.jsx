import { Box, Skeleton } from '@mui/material';
import './Hero.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

const Hero = ({fullscreenProps}) => {
    
    const [originals, setOriginals] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [pixar, setPixar] = useState([]);
    const [classics, setClassics] = useState([]);
    const [newReleases, setNewReleases] = useState([]);

    const { disablePointer, fullscreenPlayer, openFullscreenPopup, isLoading, setIsLoading } = fullscreenProps;
   
    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].originals}?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setOriginals(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].popular}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setPopular(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].trending}/week?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTrending(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTopRated(res.data.results)
        })
        .catch(error => { console.log(error) })
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/3700?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setPixar(res.data.items)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/95840?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setClassics(res.data.items)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].now_playing}?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setNewReleases(res.data.results)
        })
        .catch(error => { console.log(error) })
  
    }, []);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);

    },[isLoading])

    const mediaTypeMovie = 'movie';
    const mediaTypeTv = 'tv';

  
    return (
        <Box id="hero">

        {
            isLoading ?

                <SkeletonLoader/>

                :

                <Box className="hero-page-wrapper">

                    <Billboard 
                        disablePointer={disablePointer} 
                        movie = {originals[2]} 
                        fullscreenProps={fullscreenProps}
                        mediaType={mediaTypeTv}
                    />

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
                            title = "Classics You Have To Check Out"
                            medias = { classics }
                            className={"large-list-row"}
                            listRow
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
                            title = "Films By Pixar"
                            medias = { pixar }
                            className={"list-row"}
                            listRow
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
            }
            
        </Box>
    );
}

export default Hero;
