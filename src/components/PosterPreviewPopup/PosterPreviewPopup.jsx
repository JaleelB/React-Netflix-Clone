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
        fullscreenPlayer, setFullscreenPlayer, setFullVideoPath, posterID, setOpenFullscreenPopup
    } = fullscreenProps;

    useEffect(() => {

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US&with_networks=213`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })


        //choose either movies or tv | get the type of the media
    
    },[posterID, setFullVideoPath]);

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
            }}
            onClick={() => setOpenFullscreenPopup(true)}
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
                            onClick={() => setFullscreenPlayer(!fullscreenPlayer)}
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
