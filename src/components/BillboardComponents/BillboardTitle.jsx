import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardTitle = ({title}) => {
    return (
        <Box className="billboard__title-wrapper">
            {/* <img className="netflix-icon"src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/> */}
            <Typography 
                variant="h2" 
                component="h1" 
                className="billboard__image-title"
                sx={{color :'#fff'}}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default BillboardTitle;
