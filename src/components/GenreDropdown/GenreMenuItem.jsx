import { Box, Typography } from '@mui/material';
import React from 'react';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';

const FilterButtonIcon = ({ genre, genreID, billboardProps, setShowDropDown }) => {

    const fullscreenProps = useFullscreenPropsContext();
    const {  setIsLoading } = fullscreenProps.fullscreenProps;

    const { setGenreTitle,setGenreID } = billboardProps;


    return (
        <Box 
            className="genre-item"
            onClick={() => {
                setGenreID(genreID); 
                setGenreTitle(genre)
                setIsLoading(true);
                setShowDropDown(false);
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}
        >
            <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
            </Box>
        </Box>
    )
}

export default FilterButtonIcon;
