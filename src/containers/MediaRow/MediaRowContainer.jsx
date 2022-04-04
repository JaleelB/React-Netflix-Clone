import { Box } from '@mui/material';
import React, { useState } from 'react';
import {MediaRowWrapper, MediaRowTitle, PosterPreviewPopup } from '../../components';
import './MediaRow.scss';

const MediaRowContainer = ({title, medias, netflixOriginal, fullscreenProps, typeMedia, className,disableHover, largeRow, listRow}) => {

    const[isHovered, setIsHovered] = useState(false);
    const [cardPopupWidth, setCardPopupWidth] = useState(''); 
    const [cardPopupHeight, setCardPopupHeight] = useState('');
    const [distance, setDistance] = useState(0);
    const [totalPostersInView, setTotalPostersInView] = useState(0);
    const [viewedPosters, setViewPosters] = useState(0);
    const [containerWidth, setContainerWidth]  = useState(0);
    const [posterIndex, setPosterIndex] = useState(0);
    const [rowPadding, setRowPadding] = useState(0);
    const [genres, setGenres] = useState([]);
    const [delayed, setDelayed] = useState(true);
    const [delayHandler, setDelayHandler] = useState(null);
    const [cardPopupBackdrop, setCardPopupBackdrop] = useState('');
    const [cardPopupAirDate, setCardPopupAirDate] = useState(null);
    const [cardPopupRating, setCardPopupRating] = useState(null);
    const [cardPopupTitle, setCardPopupTitle] = useState('');
    const [postersInViewTabNumber, setPostersInViewTabNumber] = useState(0);

    const popupProps = {

        setIsHovered, isHovered,
        setCardPopupWidth,setCardPopupHeight,
        distance, setDistance,
        posterIndex, setPosterIndex,
        totalPostersInView, setTotalPostersInView,
        setRowPadding, rowPadding,
        viewedPosters, setViewPosters,
        containerWidth, setContainerWidth,
        setGenres, genres,
        cardPopupWidth, cardPopupHeight,
        delayed, setDelayed,
        delayHandler, setDelayHandler,
        cardPopupBackdrop, setCardPopupBackdrop,
        cardPopupRating, setCardPopupRating,
        cardPopupTitle, setCardPopupTitle,
        postersInViewTabNumber, setPostersInViewTabNumber,
        cardPopupAirDate, setCardPopupAirDate
    };

    return (

        <Box className="media-container">

            <MediaRowTitle title={title ? title : ''}/>
            {medias &&  <MediaRowWrapper 
                            medias={medias}   
                            netflixOriginal={netflixOriginal}
                            popupProps = {popupProps}
                            fullscreenProps = {fullscreenProps}
                            typeMedia={typeMedia}
                            className={className}
                            disableHover={disableHover}
                        /> 
            }
            
            {/*  */}
            { !disableHover && !delayed && window.innerWidth > 1200 && isHovered &&
                
                    <PosterPreviewPopup 
                        popupProps = {popupProps}
                        fullscreenProps = {fullscreenProps}
                        largeRow={largeRow}
                        listRow={listRow}
                    />
            }

            
        </Box> 
    )
}

export default MediaRowContainer;
