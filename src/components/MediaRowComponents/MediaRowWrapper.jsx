import { Box } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React from 'react';
import { MediaRow, PosterPreviewPopup } from '../../components';
import {useRowPopupPropsContext} from '../../RowPropsContext';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, typeMedia, className, disableHover, rowRef, rowTabIndex, setRowTabIndex, setPostersInView}) => {

    const rowPopupProps = useRowPopupPropsContext();

    const { slideRowLeft, slideRowRight, setIsHovered, delayMount  } = rowPopupProps.rowPopupProps;

    return (
        <Box className="media-row-wrapper" onMouseLeave={()=> setIsHovered(false)}>

            <ArrowBackIosOutlined
                className="arrow left"
                onClick = {slideRowLeft}                    
            />

                <MediaRow 
                    medias={medias} 
                    netflixOriginal={netflixOriginal} 
                    typeMedia={typeMedia}
                    className={className}
                    disableHover={disableHover}
                />

            <ArrowForwardIosOutlined
                className="arrow right"
                onClick = {slideRowRight}
            />

            { !disableHover && delayMount && window.innerWidth > 1200 && 
                    
                    <PosterPreviewPopup />
            }

        </Box>
        
    )
}

export default MediaRowWrapper;
