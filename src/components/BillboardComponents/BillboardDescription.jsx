import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardDescription = ({description}) => {
    return (
        <Box className="billboard__description-wrapper">
            <Typography  className="billboard__description" >
                {description}
            </Typography>
        </Box>
    )
}

export default BillboardDescription;
