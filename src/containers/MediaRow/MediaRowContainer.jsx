import { Box } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import {MediaRowWrapper, MediaRowTitle, PosterPreviewPopup } from '../../components';
import './MediaRow.scss';

const MediaRowContainer = ({title, medias, netflixOriginal }) => {

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

    const popupProps = {
        setIsHovered,
        setCardPopupWidth,
        setCardPopupHeight,
        distance, 
        setDistance,
        setPosterIndex,
        totalPostersInView, 
        setTotalPostersInView,
        setRowPadding,
        viewedPosters, 
        setViewPosters,
        containerWidth, 
        setContainerWidth,
        setGenres,
        isHovered,
        cardPopupWidth,
        cardPopupHeight,
        genres,
        posterIndex,
        rowPadding,
        delayed,
        setDelayed,
        delayHandler, 
        setDelayHandler
    };

    return (

        <Box className="media-container">

            <MediaRowTitle title={title}/>
            {medias &&  <MediaRowWrapper 
                            medias={medias}   
                            netflixOriginal={netflixOriginal}
                            popupProps = {popupProps}
                            // setRowPadding = { setRowPadding }
                        /> 
            }

            { !delayed && isHovered &&
                
                    <PosterPreviewPopup 
                        // width = {cardPopupWidth}
                        // height = {cardPopupHeight}
                        // isHovered = {isHovered}
                        // genres = {genres}
                        // posterIndex = { posterIndex }
                        // rowPadding = {rowPadding}
                        popupProps = {popupProps}
                    />
            }
        </Box> 
    )
}

export default MediaRowContainer;
