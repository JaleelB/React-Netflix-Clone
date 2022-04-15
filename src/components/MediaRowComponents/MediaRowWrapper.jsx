import { Box } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React from 'react';
import MediaRow from './MediaRow';
import {useRowPopupPropsContext} from '../../RowPropsContext';

import '../../containers/MediaRow/MediaRow.scss';

const MediaRowWrapper = ({medias,netflixOriginal, typeMedia, className, disableHover, rowRef, rowTabIndex, setRowTabIndex, setPostersInView}) => {

    const rowPopupProps = useRowPopupPropsContext();

    const { slideRowLeft, slideRowRight  } = rowPopupProps.rowPopupProps;


    return (
        <Box className="media-row-wrapper" >

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

        </Box>
        
    )
}

export default MediaRowWrapper;
