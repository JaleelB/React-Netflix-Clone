import { Box } from '@mui/material';
import './Hero.scss';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';

const Hero = () => {

    const {user} = useContext(AuthenticationContext);
    const {apiData} = useFetchApi(`/users/find/${user.details._id}`);
    
    const [originals, setOriginals] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [pixar, setPixar] = useState([]);
    const [classics, setClassics] = useState([]);
    const [newReleases, setNewReleases] = useState([]);


    const fullscreenProps = useFullscreenPropsContext();
    const { disablePointer, fullscreenPlayer, openFullscreenPopup, isLoading, updateLoading } = fullscreenProps.fullscreenProps;


    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].originals}?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setOriginals(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].popular}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setPopular(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].trending}/week?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTrending(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].movie}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTopRated(res.data.results)
        })
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/3700?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setPixar(res.data.items)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/10?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setClassics(res.data.items)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].now_playing}?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setNewReleases(res.data.results)
        })
  
    }, []);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            updateLoading()
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
                        movie = {originals[0]} 
                        mediaType={mediaTypeTv}
                    />

                    <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                        {
                            apiData.savedMovies.length !== 0 && 
                            <MediaRowContainer
                                title = "My List"
                                medias = { apiData.savedMovies }
                            />

                        }

                        <MediaRowContainer
                            title = "Netflix Original Shows"
                            medias = { originals }
                            netflixOriginal
                            typeMedia={mediaTypeTv}
                        />
                        <MediaRowContainer
                            title = "Most Users Loved These Shows"
                            medias = { popular }
                            typeMedia={mediaTypeMovie}
                        />
                        <MediaRowContainer
                            title = "Trending Now"
                            medias = { trending }
                            typeMedia={mediaTypeMovie}
                        />
                        
                        <MediaRowContainer
                            title = "Classics You Have To Check Out"
                            medias = { classics.length <= 20 ? classics : classics.slice(0, 20) }
                            typeMedia={mediaTypeMovie}
                        />

                        <MediaRowContainer
                            title = "New Releases"
                            medias = { newReleases }
                            typeMedia={mediaTypeMovie}
                        />
                        <MediaRowContainer
                            title = "Most Loved Shows Of All Time"
                            medias = { topRated } 
                            typeMedia={mediaTypeMovie}
                        />
                        
                        <MediaRowContainer
                            title = "Films By Pixar"
                            medias = { pixar.length <= 20 ? pixar : pixar.slice(0, 20) }
                            typeMedia={mediaTypeMovie}
                        />
            
                    </Box>

                    {
                        fullscreenPlayer && <FullscreenPlayer/>
                    }

                    {
                        openFullscreenPopup && <FullscreenPopup/>
                    }

                    <Footer/>

                </Box>
            }
            
        </Box>
    );
}

export default Hero;
