import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Header/Header.scss';

const HeaderTitle = ({title}) => {
    return (
        <Box className="header__title-wrapper">
            <Typography 
                variant="h2" 
                component="h1" 
                className="header__title"
                sx={{color :'#fff'}}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default HeaderTitle;
