import { Box } from '@mui/material';
import './Hero.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {apiComponents, Footer } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

const Hero = () => {
    
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
        .get(`${apiComponents[0]}${apiComponents[2].trending}?api_key=${apiComponents[1]}&with_networks=213`)
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
  
    return (
        <Box id="hero" sx={{
                // paddingLeft: 'calc(3.5vw + 24px)', 
                background: '#131313'
            }}>
            {/* use fuse js for live searching an array for search tab of projecct */}
            {/* <Billboard movie = {originals[Math.floor(Math.random() * originals.length)]}/> */}
            <Billboard movie = {originals[2]}/>
            {/* <Billboard movies = {originals}/> */}

            <Box className="inner">

                <MediaRowContainer
                    title = "Netflix Original Shows"
                    netflixOriginal
                    medias = { originals }
                />
                <MediaRowContainer
                    title = "Most Users Loved These Shows"
                    medias = { popular }
                />
                <MediaRowContainer
                    title = "Trending Now"
                    medias = { trending }
                />
                <MediaRowContainer
                    title = "New Releases"
                    medias = { newReleases }
                />
                <MediaRowContainer
                    title = "Most Loved Shows Of All Time"
                    medias = { topRated }
                />
                <MediaRowContainer
                    title = "Action Thrillers"
                    medias = { actionThriller }
                />
    
            </Box>

            <Footer/>
            
        </Box>
    );
}

export default Hero;
