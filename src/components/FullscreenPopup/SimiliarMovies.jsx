import { Box } from '@mui/material';
import { MediaRowContainer } from '../../containers';
import { MediaRowTitle } from '../../components';
import React from 'react'

const SimiliarMovies = ({medias, className, fullscreenProps, disableHover, typeMedia,title}) => {
    return (
        <Box className="similar-movies-conatiner">
            <MediaRowTitle title={title}/>
            <MediaRowContainer 
                className = {className}
                medias = {medias}
                fullscreenProps = { fullscreenProps } 
                typeMedia={typeMedia} 
                disableHover
            />
        </Box>
    )
}

export default SimiliarMovies;
