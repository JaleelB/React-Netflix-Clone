import { Box } from '@mui/material';
import React from 'react';
import GenreMenuItem from './GenreMenuItem';
import CloseIcon from '@mui/icons-material/Close';

import './GenreDropdown.scss'

const GenreMenu = ({setShowDropDown, billboardProps, sectionTitle}) => {

    const { genres } = billboardProps;

    return (
        <Box 
            className="genre-container"
        >
                
            {
                genres.genres.map((genre, index)=>{
                    return(
                       
                        <GenreMenuItem 
                            key={index}
                            genre={genre.name}
                            genreID={genre.id}
                            billboardProps={billboardProps}
                            setShowDropDown={setShowDropDown}
                            sectionTitle={sectionTitle}
                        />

                    );
                })
            }
            <Box 
                className="close" 
                onClick={()=> {
                    setShowDropDown(false);
                }}
            >
                <CloseIcon className="close-icon"/>
            </Box>

        </Box>

    )
}

export default GenreMenu;
