import { Box } from '@mui/material';
import React from 'react';
import MediaRow from '../../components/MediaRowComponents/MediaRow';
import MediaRowTitle from '../../components/MediaRowComponents/MediaRowTitle';
import './MediaRow.scss'

const MediaRowContainer = ({title, medias, netflixOriginal,largeRow}) => {
    
    return (
        <Box className="media-container" sx={{
            // margin: '0 auto', overflow: 'hidden', 
            // position:'relative'
        }}>

            <MediaRowTitle title={title}/>
            {medias &&  <MediaRow medias={medias} netflixOriginal={netflixOriginal} largeRow={largeRow}/> }
             
        </Box> 
    )
}

export default MediaRowContainer;
