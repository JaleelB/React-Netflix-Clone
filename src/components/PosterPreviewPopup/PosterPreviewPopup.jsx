import { Box, Typography } from '@mui/material';
import { PlayCircle, ThumbDownOffAlt, ThumbUpOffAlt, AddCircleOutline, ExpandCircleDown } from '@mui/icons-material';
import React, {useState, useEffect} from 'react';

import './PosterPreviewPopup.scss';

const PosterPreviewPopup = ({ popupProps, movieProps }) => {

    const { 
        cardPopupWidth,
        setDelayed,
        cardPopupHeight,
        genres,
        rowPadding,
        posterIndex,
        setIsHovered,
        totalPostersInView,
        cardPopupBackdrop, 
        cardPopupTitle,
        postersInViewTabNumber,
        cardPopupAirDate,
        cardPopupRating
    } = popupProps;


    console.log(
        // posterIndex ,
        // postersInViewTabNumber,
        // (totalPostersInView * postersInViewTabNumber),
        // posterIndex  - (totalPostersInView * postersInViewTabNumber),
        cardPopupAirDate,
        cardPopupRating
    );

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
        >  
            <Box className="media-poster-info-popup">

                <Box className="media-popup-container stacked">
                    <img src={cardPopupBackdrop} alt='movie backdrop'/>
                    <Typography className="popup-container-title" variant="subtitle" component="h3">{cardPopupTitle}</Typography>
                </Box>

                <Box className="media-popup-info">
                    <Box className="button-controls-container">
                        <PlayCircle className="popup-icon"/>
                        <AddCircleOutline className="popup-icon"/>
                        <ThumbUpOffAlt className="popup-icon"/>
                        <ThumbDownOffAlt className="popup-icon"/>
                        <ExpandCircleDown className="popup-icon details-button"/>
                    </Box>

                    <Box className="movie-metadata-container">
                        <Box className="movie-rating">{cardPopupRating * 10}%</Box>
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
