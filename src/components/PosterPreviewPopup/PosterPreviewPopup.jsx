import { Box, Typography } from '@mui/material';
import { PlayCircle, ThumbDownOffAlt, ThumbUpOffAlt, AddCircleOutline, ExpandCircleDown } from '@mui/icons-material';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {apiComponents } from '../../components';

import './PosterPreviewPopup.scss';

const PosterPreviewPopup = ({ popupProps, fullscreenProps }) => {

    const { 
        cardPopupWidth, setDelayed, cardPopupHeight, genres,
        rowPadding, posterIndex,setIsHovered, totalPostersInView,
        cardPopupBackdrop,cardPopupTitle,postersInViewTabNumber,
        cardPopupAirDate, cardPopupRating, mediaType
    } = popupProps;

    const {
        fullscreenPlayer, setFullscreenPlayer, setFullVideoPath, posterID, 
        setOpenFullscreenPopup, setDisablePointer, disablePointer, netflixOriginalShow,
        setNetflixOriginalShow, setMovie, setMovieCredits, setSimiliarMovies
    } = fullscreenProps;

    useEffect(() => {

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
            // console.log(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })


        //choose either movies or tv | get the type of the media
    
    },[posterID, setFullVideoPath]);


    // useEffect(() => {

    //     if(!netflixOriginalShow){


    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setMovie(res.data)
    //         })
    //         .catch(error => { console.log(error) })

    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/credits?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setMovieCredits(res.data)
    //         })
    //         .catch(error => { console.log(error) })

    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/similar?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setSimiliarMovies(res.data.results)
    //         })
    //         .catch(error => { console.log(error) })

    //     }

    //     //use a state to control if it is netflix original or not
    //     if(netflixOriginalShow){
    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setMovie(res.data)
    //         })
    //         .catch(error => { console.log(error) })

    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}/credits?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setMovieCredits(res.data)
    //         })
    //         .catch(error => { console.log(error) })

    //         axios
    //         .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}/similar?api_key=${apiComponents[1]}&language=en-US`)
    //         .then((res)=> {
    //             setSimiliarMovies(res.data.results)
    //         })
    //         .catch(error => { console.log(error) })
    //     }

    
    // },[posterID, setMovie, setMovieCredits, setSimiliarMovies, netflixOriginalShow]);


    const removeNetflixOriginal = () => { if(netflixOriginalShow) setNetflixOriginalShow(false);  }


    return (
        <Box 
            className="preview-popup" 
            sx={{
                width: `${cardPopupWidth * 1.6}px`,
                height: `${cardPopupHeight * 1.4}px`,
                // left: `${((cardPopupWidth * (posterIndex >= totalPostersInView ? posterIndex  - (totalPostersInView * postersInViewTabNumber) : posterIndex)) + rowPadding + ( posterIndex > 1 ? (8 * posterIndex) : 0 ) ) - rowPadding}px`
                left: `${((cardPopupWidth * (posterIndex >= totalPostersInView ? posterIndex  - (totalPostersInView * postersInViewTabNumber) : posterIndex)) + rowPadding )}px`
            }}
            onMouseLeave={()=> {
                setIsHovered(false)
                setDelayed(true)
                removeNetflixOriginal()
            }}
            // onClick={() => setOpenFullscreenPopup(true)}
        >  
            <Box className="media-poster-info-popup">

                <Box className="media-popup-container stacked">
                    <img src={cardPopupBackdrop} alt='movie backdrop'/>
                    <Typography className="popup-container-title" variant="subtitle" component="h3">{cardPopupTitle}</Typography>
                </Box>

                <Box className="media-popup-info">
                    <Box className="button-controls-container">
                        <PlayCircle 
                            className="popup-icon" 
                            onClick={() => {
                                setFullscreenPlayer(!fullscreenPlayer);
                                // setDisablePointer(!disablePointer);
                            }}
                        />
                        <AddCircleOutline className="popup-icon"/>
                        <ThumbUpOffAlt className="popup-icon"/>
                        <ThumbDownOffAlt className="popup-icon"/>
                        <ExpandCircleDown 
                            className="popup-icon details-button"
                            onClick = {() => setOpenFullscreenPopup(true)}
                        />
                    </Box>

                    <Box className="movie-metadata-container">
                        <Box className="movie-rating">{cardPopupRating * 10}%</Box>
                        {mediaType !== '' && <Box className="media-type">{mediaType}</Box>}
                        <Box className="movie-air-date">{cardPopupAirDate}</Box>
                        <Box className="movie-video-quality">HD</Box>
                    </Box>

                    <Box className="genre-list">
                        <ul>
                            {
                                genres.map((genre, index)=>{
                                    return <li key={index} className="genre">
                                                {index  > 0 ? <span className="separator"></span> : ''}
                                                {genre}
                                            </li>
                                })
                            }
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PosterPreviewPopup;
