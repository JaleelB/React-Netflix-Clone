import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardTitle = ({title}) => {
    return (
        <Box className="billboard__title-wrapper">
            <Typography 
                variant="h3" 
                component="h1" 
                className="billboard__image-title"
                style={{
                    color :'#fff', fontWeight: 400, textTransform:'uppercase',
                    fontSize: "min(calc(1.4vw + 2rem), 4rem)"
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default BillboardTitle;
