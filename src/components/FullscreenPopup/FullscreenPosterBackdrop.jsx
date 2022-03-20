import { Box, Typography } from '@mui/material';
import React from 'react';
import './FullscreenPopup.scss';

const FullscreenPosterBackdrop = ({backdrop, title}) => {

    return (
        <Box className="popup-backdrop stacked">
            {backdrop && <img src={'https://image.tmdb.org/t/p/original/' + backdrop} alt=""/>}
            {title && <Typography className="backdrop-title" variant="subtitle" component="h1">{title}</Typography>}
        </Box>
    )
}

export default FullscreenPosterBackdrop;
