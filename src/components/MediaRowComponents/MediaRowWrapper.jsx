import { Box } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import MediaRow from './MediaRow';

import {useRowPopupPropsContext} from '../../RowPropsContext';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, typeMedia, className, disableHover, rowRef, rowTabIndex, setRowTabIndex, setPostersInView}) => {

    const rowPopupProps = useRowPopupPropsContext();

    const { slideRowLeft, slideRowRight  } = rowPopupProps.rowPopupProps;

    

    // const[rowTabIndex, setRowTabIndex] = useState(0);
    // const showPrevButton = rowTabIndex > 0;

    return (
        <Box 
            className="media-row-wrapper" 
                // ref={posterRowRef}
        >
            <ArrowBackIosOutlined
                className="arrow left"
                // onClick = {() => slideRowLeft(setRowTabIndex)}  
                onClick = {slideRowLeft}                    
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
                    // rowTabIndex={rowTabIndex}
                    // rowRef={rowRef}
                    // setPostersInView={setPostersInView}
                    // posterRowRef={posterRowRef}
                            // distance={distance}
                />

            <ArrowForwardIosOutlined
                className="arrow right"
                // onClick = {() => slideRowRight(setRowTabIndex)}
                onClick = {slideRowRight}
            />

        </Box>
        
    )
}

export default MediaRowWrapper;
