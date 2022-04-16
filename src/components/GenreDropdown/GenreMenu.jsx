import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import GenreMenuItem from './GenreMenuItem';

import './GenreDropdown.scss'

const GenreMenu = ({setShowDropDown}) => {

    const fullscreenProps = useFullscreenPropsContext();
    const { genreID, setIsGenreList, setGenreListID } = fullscreenProps.fullscreenProps;

    const moiveGenres = [
       "Action",
       "Animation",
       "Comedy",
       "Crime",
       "Documentary",
      "Drama",
        "Fantasy",
       "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Western"
    ];

    const genreCodes = [28, 16, 35, 80, 99, 18, 14, 27, 9648, 10749, 878, 53, 37];

    const genreMovieListIDs = [256,5903,9226,0,7060321,2654,2151,79828,24370,37375,3945,44,0]; 

    useEffect(() => {
       for(let i=0; i<genreCodes.length; i++) 
            if(genreID === genreCodes[i]){
                setIsGenreList(true);
                setGenreListID(genreMovieListIDs[i]);
            }
    }, [genreID])
    

    return (
        <Box className="genre-container">
                
            {
                moiveGenres.map((genre, index)=>{
                    return(
                       
                        <GenreMenuItem 
                            key={index}
                            genre={genre}
                            genreID={genreCodes[index]}
                            setShowDropDown={setShowDropDown}
                        />

                    );
                })
            }

        </Box>

    )
}

export default GenreMenu;
