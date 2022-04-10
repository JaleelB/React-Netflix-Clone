import { Box, Skeleton } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, FilterButtons, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

import './TvShows.scss';

const TvShows = ({fullscreenProps}) => {

    const [discover, setDiscover] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [genreListID, setGenreListID] = useState();
    const [isGenreList, setIsGenreList] = useState(false);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);

    const mediaTypeTv = 'tv';
    const randIndex = useRef(null);

    const { 
        disablePointer, fullscreenPlayer, openFullscreenPopup, genreTitle, setGenreTitle, genreID,
        isLoading, setIsLoading, setGenreID
    } = fullscreenProps;

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
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setTopRated(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setDiscover(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].on_tv}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setOnTheAir(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv_trending}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setTrendingTv(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}${apiComponents[2].top_rated}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setAiringToday(res.data.results)
        })
        .catch(error => { console.log(error) })

        if(genreListID){
            axios
            .get(`${apiComponents[0]}${apiComponents[2].list}/${genreListID}?api_key=${apiComponents[1]}`)
            .then((res)=> {
                setGenreList(res.data.items)
            })
            .catch(error => { console.log(error) })
        }
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&certification_country=US&first_air_date_year=1992${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setNinetysBinge(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&certification_country=US&first_air_date_year=1984${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setEightysBinge(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_tv}?api_key=${apiComponents[1]}&language=en-US&vote_average.gte=8.1&year=1995${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setStaffPicks(res.data.results)
        })
        .catch(error => { console.log(error) })
  
    }, [genreID, genreListID]);

    
    useEffect(() => {
        randIndex.current = randIndexGenerator(20, 5);
    },[])

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setIsLoading(false);
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
                    disablePointer={disablePointer} 
                    movie = {discover[randIndex.current]} 
                    fullscreenProps={fullscreenProps} 
                    sectionTitle={"Tv Shows"} 
                    genreTitle={genreTitle} 
                    setGenreTitle={setGenreTitle}
                    setGenreID={setGenreID}
                    setGenreListID={setGenreListID}
                    setIsGenreList={setIsGenreList}
                    setIsLoading={setIsLoading}
                    mediaType={mediaTypeTv}
                />

                <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                    <FilterButtons 
                        fullscreenProps={fullscreenProps} 
                        setIsGenreList={setIsGenreList}
                        setGenreListID = {setGenreListID}
                        setIsLoading={setIsLoading}
                    />

                    {
                        isGenreList && genreList &&

                            <MediaRowContainer
                            title = {`${genreTitle} Tv Shows For You`}
                            medias = { genreList }
                            // className={"large-row"}
                            fullscreenProps = { fullscreenProps } 
                            // largeRow
                            typeMedia={mediaTypeTv}
                            />
                    }

                    <MediaRowContainer
                        title = {`${genreTitle} Tv Shows For You`}
                        medias = { discover }
                        // className={"large-row"}
                        fullscreenProps = { fullscreenProps } 
                        // largeRow
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Trending Tv Shows`}
                        medias = { trendingTv }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Top Rated ${genreTitle} Tv Shows`}
                        medias = { topRated }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Popular ${genreTitle} Tv Shows This Year`}
                        medias = { popular }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />

                    <MediaRowContainer
                        title = {`Binge Worthy ${genreTitle} Tv Shows`}
                        medias = { onTheAir }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />
                    
                    <MediaRowContainer
                        title = {`${genreTitle} Tv Shows Airing Today`}
                        medias = { airingToday }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} Staff Picks`}
                        medias = { staffPicks }
                        // className={"large-row"}
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 90's Binge`}
                        medias = { ninetysBinge }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 80's Binge`}
                        medias = { eightysBinge }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeTv}
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
    )
}


export default TvShows;
