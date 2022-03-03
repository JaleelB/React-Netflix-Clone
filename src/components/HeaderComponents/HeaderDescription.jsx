import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Header/Header.scss';

const HeaderDescription = ({description}) => {
    return (
        <Box className="header__description-wrapper" sx={{
                maxWidth: '650px', display:{xs: 'none', sm: 'block'}
            }}
        >
            <Typography 
                className="header__description"
                variant="h6" 
                component="h5"
                sx={{color :'#fff', lineHeight: '1.4', fontWeight: 400}}
            >
                {description}
            </Typography>
        </Box>
    )
}

export default HeaderDescription;
