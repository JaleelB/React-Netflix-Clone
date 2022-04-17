import { Box } from '@mui/material';
import React from 'react';
import GenreMenuItem from './GenreMenuItem';

import './GenreDropdown.scss'

const GenreMenu = ({setShowDropDown, billboardProps}) => {

    const { genres } = billboardProps;

    return (
        <Box className="genre-container">
                
            {
                genres.genres.map((genre, index)=>{
                    return(
                       
                        <GenreMenuItem 
                            key={index}
                            genre={genre.name}
                            genreID={genre.id}
                            billboardProps={billboardProps}
                            setShowDropDown={setShowDropDown}
                        />

                    );
                })
            }

        </Box>

    )
}

export default GenreMenu;
