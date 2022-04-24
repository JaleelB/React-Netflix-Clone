import { Box } from '@mui/material';
import { MediaRowContainer } from '../../containers';
import { MediaRowTitle } from '..';
import React from 'react';


const SimiliarMovies = ({medias, className, disableHover, typeMedia,title}) => {

    return (
        <Box className="similar-movies-conatiner">
            <MediaRowTitle title={title}/>
            <MediaRowContainer 
                className = {className}
                medias = {medias}
                typeMedia={typeMedia} 
                disableHover
            />
        </Box>
    )
}

export default SimiliarMovies;
