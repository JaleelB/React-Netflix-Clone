import { Box } from '@mui/material';
import React from 'react';
import '../../containers/MediaRow/MediaRow.scss';

const MediaRowTitle = ({title}) => {
    return (
        <Box className="title-wrapper">
            {/* <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2> */}
            {title}
        </Box>
    )
}

export default MediaRowTitle;

