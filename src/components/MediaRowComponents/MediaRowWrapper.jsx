import { Box } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useRef } from 'react';
import MediaRow from './MediaRow';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, popupProps, fullscreenProps, typeMedia, className}) => {

    const wrapperRef = useRef(null);

    const { 
        distance, setDistance, 
        totalPostersInView,
        viewedPosters, setViewPosters,
        containerWidth, setPostersInViewTabNumber
    } = popupProps


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
        // console.log(distance, viewedPosters);
    };


    return (
        <Box className="media-row-wrapper" ref={wrapperRef}>
                {showPrevButton && <ArrowBackIosOutlined
                    className="arrow left"
                    onClick = {()=> handleMovementLeft()}                    
                />}

                    <MediaRow 
                    sx={{border:" 1px solid white"}}
                        medias={medias} 
                        netflixOriginal={netflixOriginal} 
                        wrapperRef = {wrapperRef}
                        popupProps = {popupProps}
                        fullscreenProps = {fullscreenProps}
                        typeMedia={typeMedia}
                        className={className}
                    />

                {showNextButton && <ArrowForwardIosOutlined
                    className="arrow right"
                    onClick = {()=> handleMovementRight()}
                />}
        </Box>
    )
}

export default MediaRowWrapper;
