import { Box, Skeleton } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, FilterButtons, SkeletonLoader } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

import './Movies.scss';

const Movies = ({fullscreenProps}) => {

    const [discover, setDiscover] = useState([]);
    // const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [bestPictures, setBestPictures] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [genreListID, setGenreListID] = useState();
    const [isGenreList, setIsGenreList] = useState(false);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);

    const mediaTypeMovie = 'movie';
    const randIndex = useRef(null);

    const { 
        disablePointer, fullscreenPlayer, openFullscreenPopup, genreTitle, setGenreTitle, genreID,
        isLoading, setIsLoading
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

        // if(genreListID){
            axios
            .get(`${apiComponents[0]}${apiComponents[2].list}/${genreListID}?api_key=${apiComponents[1]}`)
            .then((res)=> {
                setGenreList(res.data.items)
            })
            .catch(error => { console.log(error) })
        // }
        
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
            setIsLoading(false);
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
                    disablePointer={disablePointer} 
                    movie = {discover[randIndex.current]} 
                    fullscreenProps={fullscreenProps} 
                    sectionTitle={"Movies"} 
                    genreTitle={genreTitle} 
                    setGenreTitle={setGenreTitle}
                    mediaType="movie"
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
                            title = {`${genreTitle} Movies For You`}
                            medias = { genreList }
                            // className={"large-row"}
                            fullscreenProps = { fullscreenProps } 
                            // largeRow
                            typeMedia={mediaTypeMovie}
                            />
                    }

                    <MediaRowContainer
                        title = "Movies For You"
                        medias = { discover }
                        // className={"large-row"}
                        fullscreenProps = { fullscreenProps } 
                        // largeRow
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Popular Movies This Year"
                        medias = { popular }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Academy Awards Best Movie Picture Winners"
                        medias = { bestPictures }
                        className={"list-row"}
                        listRow
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Upcoming Movies"
                        medias = { upcoming }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "Staff Picks"
                        medias = { staffPicks }
                        // className={"large-row"}
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "90's Binge"
                        medias = { ninetysBinge }
                        fullscreenProps = { fullscreenProps } 
                        typeMedia={mediaTypeMovie}
                    />
                    <MediaRowContainer
                        title = "80's Binge"
                        medias = { eightysBinge }
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
    )
}

export default Movies;
