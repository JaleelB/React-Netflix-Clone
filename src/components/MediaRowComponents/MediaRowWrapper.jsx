import { Box } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import MediaRow from './MediaRow';

import {useRowPopupPropsContext} from '../../RowPropsContext';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, typeMedia, className, disableHover, rowRef, rowTabIndex, setRowTabIndex, setPostersInView}) => {

    const rowPopupProps = useRowPopupPropsContext();
    // const { 
    //     distance, setDistance, 
    //     totalPostersInView,
    //     viewedPosters, setViewPosters,
    //     containerWidth, setPostersInViewTabNumber, setContainerWidth,
    // } = rowPopupProps.rowPopupProps;

    const { slideRowLeft, slideRowRight } = rowPopupProps.rowPopupProps;

    // const showPrevButton = distance < 0;
    // const showNextButton = (viewedPosters + totalPostersInView) < medias.length;


    // const slideRowLeft = () => {
    //     setPostersInViewTabNumber(prevPostersInViewTabNumber => prevPostersInViewTabNumber - 1); 
    //     setViewPosters(viewedPosters - totalPostersInView);
    //     setDistance(distance + containerWidth + (totalPostersInView * 0.5));
    // };

    // const slideRowRight = () => {
    //     setPostersInViewTabNumber(prevPostersInViewTabNumber => prevPostersInViewTabNumber + 1);
    //     setViewPosters(viewedPosters + totalPostersInView);
    //     setDistance(distance - containerWidth);
    // };

    // const { posterRef, posterWidth, posterHeight } = usePosterSize();
    // const {
    //     slideRowLeft, slideRowRight, posterRowRef, showPrevButton, showNextButton, distance
    // } = useRowSliding(posterWidth, rowRef, medias.length);


    // const posterProps = {
    //     posterRef, posterWidth, posterHeight
    // };

    // console.log(showNextButton)

    // const[rowTabIndex, setRowTabIndex] = useState(0);
    // const showPrevButton = rowTabIndex > 0;

    return (
        <Box 
            className="media-row-wrapper" 
                // ref={posterRowRef}
        >
            <ArrowBackIosOutlined
                className="arrow left"
                onClick = {() => slideRowLeft(setRowTabIndex)}                    
            />

                <MediaRow 
                    medias={medias} 
                    netflixOriginal={netflixOriginal} 
                            // wrapperRef = {wrapperRef}
                            // popupProps = {popupProps}
                            // fullscreenProps = {fullscreenProps}
                    typeMedia={typeMedia}
                    className={className}
                    disableHover={disableHover}
                    rowTabIndex={rowTabIndex}
                    rowRef={rowRef}
                    setPostersInView={setPostersInView}
                    // posterRowRef={posterRowRef}
                            // distance={distance}
                />

            <ArrowForwardIosOutlined
                className="arrow right"
                onClick = {() => slideRowRight(setRowTabIndex)}
            />

        </Box>
        
    )
}

export default MediaRowWrapper;
