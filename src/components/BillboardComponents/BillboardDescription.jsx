import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../containers/Billboard/Billboard.scss';
// import {useFullscreenPropsContext} from '../../FullscreenPropsContext';

const BillboardDescription = ({description}) => {

    // const fullscreenProps = useFullscreenPropsContext();
    // const { truncate, numberOfWords } = fullscreenProps.fullscreenProps;

    const numberOfWords = (string) => { return string.split(" ").length; }
    const truncate = (string, numOfWords) => { return string.split(" ").splice(0, numOfWords).join(" ") + "..."; }

    return (
        <Box className="billboard__description-wrapper">
            <Typography  className="billboard__description" >
                {numberOfWords(description) > 50 ? truncate(description, 30) : description}
            </Typography>
        </Box>
    )
}

export default BillboardDescription;
