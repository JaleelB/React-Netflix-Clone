import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';

const FilterButtonIcon = ({setGenreID, genre, background, genreID}) => {

    // const [activeGenre, setActiveGenre] = useState(false);
    const iconRef = useRef(null);

    // const handleActiveGenre = (event) => {
    //     // if(event.target.classList.contains( "active" )) setActiveGenre(false);
    //     // else{
    //     //     setActiveGenre(true);
    //     // }
    //     if(activeGenre && !event.target.classList.contains( "active" )){
    //         setActiveGenre(false);
    //         // event.target.className+="active";
    //     }
    //     // else if(!activeGenre){
    //     //     setActiveGenre(true);
            
    //     // }
    // };


    return (
        <Box 
            ref = {iconRef}
            className={`genre-icon`}
            sx={{backgroundImage: `url(${background})`}} 
            onClick={(e) => {
                setGenreID(genreID); 
                // setActiveGenre(true);
                // handleActiveGenre(e);
                // setActiveGenre(true);
            }}
        >
            <Box className="genre-title-wrapper">
                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
            </Box>
        </Box>
    )
}

export default FilterButtonIcon;
