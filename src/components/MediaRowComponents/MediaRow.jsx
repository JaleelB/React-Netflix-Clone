import { Box } from '@mui/material';
import React from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';

const MediaRow = ({medias, netflixOriginal}) => {
    return (
        <Box className="media-row" >

            {
                medias && medias.map((media) => {
                        
                    return <MediaPoster 
                                key={media.id}
                                netflixOriginal={netflixOriginal}
                                posterPath = {media.poster_path}
                                name = {media.name}
                            />
                        
                })   
            }

        </Box>
    )
}

export default MediaRow
