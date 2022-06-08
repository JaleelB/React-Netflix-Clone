import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import './Movies.scss';

const Movies = () => {

    const [discover, setDiscover] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [bestPictures, setBestPictures] = useState([]);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);
    const [trendingMovie, setSTrendingMovie] = useState([]);

    const [genres, setGenres] = useState([]);
    const [genreTitle, setGenreTitle] = useState('');
    const [genreID, setGenreID] = useState(null);

    const mediaTypeMovie = 'movie';
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
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&page=1&primary_release_year=2022${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setPopular(res.data.results)
        })


        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setDiscover(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].upcoming_movie}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setUpcoming(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/28?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setBestPictures(res.data.items)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].movie_trending}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setSTrendingMovie(res.data.results)
        })        
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1992${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setNinetysBinge(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1984${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setEightysBinge(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&language=en-US&vote_average.gte=8.1&year=1995`)
        .then((res)=> {
            setStaffPicks(res.data.results)
        })

        axios
        .get(`${apiComponents[0]}/genre${apiComponents[2].movie}${apiComponents[2].list}?api_key=${apiComponents[1]}&language=en-US`)
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
        <Box id="movies-page">
       
        {
            isLoading ?

            <SkeletonLoader/>

            :

            <Box className="movie-page-wrapper">
                <Billboard 
                    movie = {discover[randIndex.current]} 
                    sectionTitle={"Movies"} 
                    mediaType="movie"
                    billboardProps={billboardProps}
                />

                <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                    <MediaRowContainer
                        title = {`${genreTitle} Movies For You`}
                        medias = { discover }
                        typeMedia={mediaTypeMovie}
                    />

                    <MediaRowContainer
                        title = "Trending Movies For You"
                        medias = { trendingMovie }
                        typeMedia={mediaTypeMovie}
                    />

                    <MediaRowContainer
                        title = {`Popular ${genreTitle} Movies This Year`}
                        medias = { popular }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Academy Awards Best Movie Picture Winners"
                        medias = { bestPictures }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Upcoming Movies"
                        medias = { upcoming }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} Staff Picks`}
                        medias = { staffPicks }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 90's Binge`}
                        medias = { ninetysBinge }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = {`${genreTitle} 80's Binge`}
                        medias = { eightysBinge } 
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
    )
}

export default Movies;
