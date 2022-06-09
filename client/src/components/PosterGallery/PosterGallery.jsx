import { Box, Typography } from '@mui/material';
import React from 'react';
import { MediaRowContainer } from '../../containers';
import { MediaRowTitle } from '..';

import './PosterGallery.scss';

const PosterGallery = ({medias, title, className, errorMessage, mediaType}) => {

    return (
        <Box className="poster-gallery-container">
            
            <MediaRowTitle title={title}/>
            <MediaRowContainer 
                className = {className}
                medias = {medias} 
                typeMedia={mediaType} 
                disableHover
            />

           { errorMessage && 
                <Box 
                    className="error-message-container"
                    sx={{display:'grid', placeContent:'center'}}
                >
                    <Typography 
                        className="error-message" 
                        variant="subtitle1" 
                        component="h6"
                        sx={{whiteSpace:'pre-line'}}
                    >
                        {errorMessage}
                    </Typography> 
                </Box>
            }    

        </Box>
    )
}

export default PosterGallery;
