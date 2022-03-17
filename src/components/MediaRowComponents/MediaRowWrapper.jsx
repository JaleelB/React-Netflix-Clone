import { Box, IconButton } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';
import MediaRow from './MediaRow';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, popupProps, fullscreenPlayerProps}) => {

    const wrapperRef = useRef(null);

    const { 
        distance, setDistance, 
        totalPostersInView, setTotalPostersInView,
        viewedPosters, setViewPosters,
        containerWidth, setContainerWidth,
        postersInViewTabNumber, setPostersInViewTabNumber
    } = popupProps

    //console.log(viewedPosters, totalPostersInView);

    const showPrevButton = distance < 0;
    const showNextButton = (viewedPosters + totalPostersInView) < medias.length;


    const handleMovementLeft = () => {
        setPostersInViewTabNumber(prevPostersInViewTabNumber => prevPostersInViewTabNumber - 1); 
        setViewPosters(viewedPosters - totalPostersInView);
        setDistance(distance + containerWidth + (totalPostersInView * 0.5));
    };

    const handleMovementRight = () => {
        setPostersInViewTabNumber(prevPostersInViewTabNumber => prevPostersInViewTabNumber + 1);
        setViewPosters(viewedPosters + totalPostersInView);
        setDistance(distance - containerWidth);
        //console.log(postersInViewTabNumber);
    };


    return (
        <Box className="media-row-wrapper" ref={wrapperRef}>
                {showPrevButton && <ArrowBackIosOutlined
                    className="arrow left"
                    onClick = {()=> handleMovementLeft()}                    
                />}

                    <MediaRow 
                        medias={medias} 
                        netflixOriginal={netflixOriginal} 
                        wrapperRef = {wrapperRef}
                        popupProps = {popupProps}
                        fullscreenPlayerProps = {fullscreenPlayerProps}
                    />

                {showNextButton && <ArrowForwardIosOutlined
                    className="arrow right"
                    onClick = {()=> handleMovementRight()}
                />}
        </Box>
    )
}

export default MediaRowWrapper;
