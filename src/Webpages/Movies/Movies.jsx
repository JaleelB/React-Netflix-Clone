import { Box, Skeleton } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, GenreMenu, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import './Movies.scss';

const Movies = () => {

    const [discover, setDiscover] = useState([]);
    // const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [bestPictures, setBestPictures] = useState([]);
    const [genreList, setGenreList] = useState([]);
    // const [genreListID, setGenreListID] = useState();
    // const [isGenreList, setIsGenreList] = useState(false);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);
    const [trendingMovie, setSTrendingMovie] = useState([]);

    const mediaTypeMovie = 'movie';
    const randIndex = useRef(null);

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        disablePointer, fullscreenPlayer, openFullscreenPopup, 
        genreTitle, setGenreTitle, genreID,isLoading, 
        updateLoading, setGenreID,genreListID, setGenreListID,
        isGenreList, setIsGenreList
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
        .catch(error => { console.log(error) })

        // axios
        // .get(`${apiComponents[0]}${apiComponents[2].latest_movie}?api_key=${apiComponents[1]}`)
        // .then((res)=> {
        //     setLatest(res.data)
        // })
        // .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setDiscover(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].upcoming_movie}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setUpcoming(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/28?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setBestPictures(res.data.items)
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
        .get(`${apiComponents[0]}${apiComponents[2].movie_trending}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setSTrendingMovie(res.data.results)
        })
        .catch(error => { console.log(error) })        
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1992${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setNinetysBinge(res.data.results)
            // console.log(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1984${genreID ? `&with_genres=${genreID}` : ''}`)
        .then((res)=> {
            setEightysBinge(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&language=en-US&vote_average.gte=8.1&year=1995`)
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
                />

                <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

                    {
                        isGenreList && genreList &&

                            <MediaRowContainer
                            title = {`${genreTitle} Movies For You`}
                            medias = { genreList }
                            typeMedia={mediaTypeMovie}
                            />
                    }

                    <MediaRowContainer
                        title = "Movies For You"
                        medias = { discover }
                        typeMedia={mediaTypeMovie}
                    />



                    <MediaRowContainer
                        title = "Trending Movies For You"
                        medias = { trendingMovie }
                        typeMedia={mediaTypeMovie}
                    />


                    <MediaRowContainer
                        title = "Popular Movies This Year"
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
                        title = "Staff Picks"
                        medias = { staffPicks }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "90's Binge"
                        medias = { ninetysBinge }
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "80's Binge"
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
