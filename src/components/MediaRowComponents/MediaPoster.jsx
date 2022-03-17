import { Box, Link } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {apiComponents} from '../../components';
import axios from 'react';
import '../../containers/MediaRow/MediaRow.scss';


const MediaPoster = ({popupProps, index,posterPath, name, netflixOriginal, posterRef, updatePosterWidth, genreIDs, backdrop, airDate, rating, id, fullscreenPlayerProps}) => {

    const { 
        setIsHovered,
        setCardPopupWidth,
        setCardPopupHeight,
        setDelayed,
        setDelayHandler,
        setPosterIndex,
        setGenres,
        delayHandler,
        setCardPopupBackdrop,
        setCardPopupAirDate,
        setCardPopupTitle,
        setCardPopupRating
   
    } = popupProps;

    const {
        setPosterID
    } = fullscreenPlayerProps;
    
    useEffect(()=>{
        updatePosterWidth(Math.floor(posterRef.current.getBoundingClientRect().width));
    },[posterRef])

    const getGenres = () => {

        const genres = [];

        for(let genreItem in genreIDs){
            for(let i=0; i<apiComponents[3].length; i++){
                if(genreIDs[genreItem] in apiComponents[3][i]) genres.push(apiComponents[3][i][`${genreIDs[genreItem]}`])
            }
        }

        return genres;
    };

    const handleDelayOnMouseEnter = event => {
        setDelayHandler(setTimeout(() => {
            setDelayed(false)
        }, 700))
    }

    const handleDelayOnMouseLeave = () => {
        clearTimeout(delayHandler)
        // setDelayed(true)
    }

    return (
        // <Link>
            <Box 
                className='media-poster stacked' 
                sx={{width: '100%', height: '100%'}}
                ref={posterRef}
                onMouseEnter={()=>{
                    setIsHovered(true);
                    handleDelayOnMouseEnter(); 
                    setCardPopupWidth(Math.floor(posterRef.current.getBoundingClientRect().width));
                    setCardPopupHeight(Math.floor(posterRef.current.getBoundingClientRect().height));
                    setPosterIndex(index);
                    setGenres(getGenres());
                    setCardPopupBackdrop('https://image.tmdb.org/t/p/original/' + backdrop);
                    setCardPopupTitle(name);
                    setCardPopupAirDate(airDate);
                    setCardPopupRating(rating);
                    setPosterID(id)
                }}
                onMouseLeave={()=> {
                    handleDelayOnMouseLeave()
                    // setDelayed(true)
                }}
            >
                
                <Box className="media-poster-image-wrapper">
                    { netflixOriginal && posterPath && <img className="netflix-icon"src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/> }
                    <img className="media-poster-image" draggable="false"  src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={name}/>
                </Box>

            </Box>
        // </Link>
    )
}

export default MediaPoster;
