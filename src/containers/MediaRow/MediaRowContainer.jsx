import { Box } from '@mui/material';
import React from 'react';
import {MediaRowWrapper, MediaRowTitle } from '../../components';
import './MediaRow.scss'

const MediaRowContainer = ({title, medias, netflixOriginal}) => {

    
    return (
        <Box className="media-container" >

            <MediaRowTitle title={title}/>
            {medias &&  <MediaRowWrapper medias={medias} netflixOriginal={netflixOriginal} /> }
             
        </Box> 
    )
}

export default MediaRowContainer;
