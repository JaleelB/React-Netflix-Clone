import { Box, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';

const FilterButtonIcon = ({ genre, genreID, billboardProps, setShowDropDown, sectionTitle }) => {

    const fullscreenProps = useFullscreenPropsContext();
    const {  setIsLoading } = fullscreenProps.fullscreenProps;

    const { setGenreTitle,setGenreID } = billboardProps;


    return (
        <Link className="genre-url-path" to={`/${sectionTitle === "Tv Shows" ? "TvShows" : "Movies"}/${genreID}`}>
            <Box 
                className="genre-item"
                onClick={() => {
                    setGenreID(genreID); 
                    setGenreTitle(genre);
                    setIsLoading(true);
                    setShowDropDown(false);
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}
            >
                <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default FilterButtonIcon;
