import { Box, IconButton } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';
import MediaRow from './MediaRow';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, popupProps}) => {

    const wrapperRef = useRef(null);

    // const [distance, setDistance] = useState(0);
    // const [totalPostersInView, setTotalPostersInView] = useState(0);
    // const [viewedPosters, setViewPosters] = useState(0);
    // const [containerWidth, setContainerWidth]  = useState(0);

    const { 
        distance, setDistance, 
        totalPostersInView, setTotalPostersInView,
        viewedPosters, setViewPosters,
        containerWidth, setContainerWidth
    } = popupProps

    const showPrevButton = distance < 0;
    const showNextButton = (viewedPosters + totalPostersInView) < medias.length;


    const handleMovementLeft = () => {
        setViewPosters(viewedPosters - totalPostersInView);
        setDistance(distance + containerWidth);
    };

    const handleMovementRight = () => {
        setViewPosters(viewedPosters + totalPostersInView);
        setDistance(distance - containerWidth);
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
                        // distance = {distance}
                        wrapperRef = {wrapperRef}
                        // updateContainerWidth = {setContainerWidth}
                        // updateTotalPosters = {setTotalPostersInView}
                        popupProps = {popupProps}
                        // setRowPadding = {setRowPadding}
                    />

                {showNextButton && <ArrowForwardIosOutlined
                    className="arrow right"
                    onClick = {()=> handleMovementRight()}
                />}
        </Box>
    )
}

export default MediaRowWrapper;
