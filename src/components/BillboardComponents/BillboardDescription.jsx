import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';

const BillboardDescription = ({description}) => {

    const numberOfWords = (string) => { return string.split(" ").length }
    const truncate = (string, numOfWords) => { return string.split(" ").splice(0, numOfWords).join(" ") + "..."; }

    return (
        <Box className="billboard__description-wrapper" sx={{display: {xs: 'none', md: 'block'}}}>
            <Typography  className="billboard__description" >
                {description && numberOfWords(description) > 50 ? truncate(description, 50) : description}
            </Typography>
        </Box>
    )
}

export default BillboardDescription;
