import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import './TvShows.scss';

const TvShows = () => {

    const [discover, setDiscover] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);

    const [genres, setGenres] = useState([]);
    const [genreTitle, setGenreTitle] = useState('');
    const [genreID, setGenreID] = useState(null);


    const mediaTypeTv = 'tv';
    const randIndex = useRef(null);

    const billboardProps = {
        genreTitle, setGenreTitle, genreID, setGenreID, genres
    };


    const fullscreenProps = useFullscreenPropsContext();
    const { 
        disablePointer, fullscreenPlayer, openFullscreenPopup, 
        isLoading, updateLoading, 
    } = fullscreenProps.fullscreenProps;

    const randIndexGenerator = (maxValue, indexCount) => {
        let randArray =[];

        while(randArray.length < indexCount){
            let randNum = Math.floor(Math.random() * maxValue);
            if(randArray.indexOf(randNum) === -1) randArray.push(randNum);
        }

        return randArray[0];
    };


    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}${apiComponents[2].tv_popular}?api_key=${apiComponents[1]}&page=1&primary_release_year=2022${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setPopular(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setTopRated(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setDiscover(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].on_tv}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setOnTheAir(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv_trending}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTrendingTv(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setAiringToday(res.data.results)
        })
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&certification_country=US&first_air_date_year=1992${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setNinetysBinge(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&certification_country=US&first_air_date_year=1984${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setEightysBinge(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&language=en-US&vote_average.gte=8.1&year=1995${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setStaffPicks(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}/genre${apiComponents[2].tv}${apiComponents[2].list}?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setGenres(res.data)
        })
  
    }, [genreID]);

   
    
    useEffect(() => {
        randIndex.current = randIndexGenerator(20, 5);
    },[])

    useEffect(() => {
        
        const timer = setTimeout(() => {
            updateLoading();
        }, 2000);

        return () => clearTimeout(timer);

    },[isLoading])

    
    return (
        <Box id="tv-page">
       
        {
            isLoading ?

            <SkeletonLoader/>

            :

            <Box className="movie-page-wrapper">
                <Billboard  
                    movie = {discover[randIndex.current]}  
                    sectionTitle={"Tv Shows"} 
                    mediaType={mediaTypeTv}
                    billboardProps={billboardProps}
                />

                <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                    <MediaRowContainer
                        title = {`${genreTitle} Tv Shows For You`}
                        medias = { discover }
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Trending Tv Shows`}
                        medias = { trendingTv }
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Top Rated ${genreTitle} Tv Shows`}
                        medias = { topRated }
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Popular ${genreTitle} Tv Shows This Year`}
                        medias = { popular }
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Binge Worthy ${genreTitle} Tv Shows`}
                        medias = { onTheAir }
                        typeMedia={mediaTypeTv}
                    />
                    
                    <MediaRowContainer
                        title = {`${genreTitle} Tv Shows Airing Today`}
                        medias = { airingToday }
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} Staff Picks`}
                        medias = { staffPicks } 
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 90's Binge`}
                        medias = { ninetysBinge }
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 80's Binge`}
                        medias = { eightysBinge }
                        typeMedia={mediaTypeTv}
                    />

                </Box>

                {
                    fullscreenPlayer && 
                    
                        <FullscreenPlayer/>
                }

                {
                    openFullscreenPopup && 
                    <FullscreenPopup/>

                }

                <Footer/>

            </Box>
        }
        
    </Box>
    )
}


export default TvShows;
