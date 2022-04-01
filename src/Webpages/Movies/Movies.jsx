import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {apiComponents, Footer, FullscreenPlayer,FullscreenPopup, FilterButtons } from '../../components';
import { MediaRowContainer, Billboard } from '../../containers';

import './Movies.scss';

const Movies = ({fullscreenProps}) => {

    const [discover, setDiscover] = useState([]);
    // const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [bestPictures, setBestPictures] = useState([]);
    const [eightysBinge, setEightysBinge] = useState([]);
    const [ninetysBinge, setNinetysBinge] = useState([]);
    const [staffPicks, setStaffPicks] = useState([]);

    let randIndex = 0;

    useEffect(() => {

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&page=1&primary_release_year=2022`)
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
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setDiscover(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].upcoming_movie}?api_key=${apiComponents[1]}`)
        .then((res)=> {
            setUpcoming(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].list}/28?api_key=${apiComponents[1]}&with_networks=213`)
        .then((res)=> {
            setBestPictures(res.data.items)
        })
        .catch(error => { console.log(error) })
        
        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1992&vote_average.gte=8.3`)
        .then((res)=> {
            setNinetysBinge(res.data.results)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].discover_movie}?api_key=${apiComponents[1]}&certification_country=US&year=1984&vote_average.gte=8.3`)
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
  
    }, []);


    useEffect(() => {
        randIndex = randIndexGenerator(20, 1);
    },[])

    const randIndexGenerator = (maxValue, indexCount) => {
        let randArray =[];

        while(randArray.length < indexCount){
            let randNum = Math.floor(Math.random() * maxValue);
            if(randArray.indexOf(randNum) === -1) randArray.push(randNum);
        }

        return randArray[0];
    };

    const { disablePointer, fullscreenPlayer, openFullscreenPopup } = fullscreenProps;

    const mediaTypeMovie = 'movie';


    return (
        <Box id="movies-page">
       
        <Billboard disablePointer={disablePointer} movie = {discover[randIndex]} fullscreenProps={fullscreenProps}/>

        <Box className={`inner ${disablePointer ? 'disable-pointer' : ''}`}>

            <FilterButtons/>

            <MediaRowContainer
                title = "Movies For You"
                medias = { discover }
                className={"large-row"}
                fullscreenProps = { fullscreenProps } 
                largeRow
                typeMedia={mediaTypeMovie}
            />
            <MediaRowContainer
                title = "Popular Movies This Year"
                medias = { popular }
                fullscreenProps = { fullscreenProps } 
                typeMedia={mediaTypeMovie}
            />
            <MediaRowContainer
                title = "Best Movie Picture Winners - The Academy Awards"
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
                className={"large-row"}
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
    )
}

export default Movies;
