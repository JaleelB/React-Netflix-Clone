import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardDescription = ({description}) => {
    return (
        <Box className="billboard__description-wrapper" sx={{
                maxWidth: '650px', display:{xs: 'none', sm: 'block'}
            }}
        >
            <Typography 
                className="billboard__description"
                // variant="h6" 
                // component="h5"
                sx={{color :'#fff', fontSize: '1.4vw', lineHeight: '1.4', fontWeight: 400, textShadow: '2px 2px 4px rgb(0 0 0 / 45%)'}}
            >
                {description}
            </Typography>
        </Box>
    )
}

export default BillboardDescription;
