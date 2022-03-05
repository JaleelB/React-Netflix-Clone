import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardTitle = ({title}) => {
    return (
        <Box className="billboard__title-wrapper">
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
