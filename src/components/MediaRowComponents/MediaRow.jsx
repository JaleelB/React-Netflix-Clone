import { Box } from '@mui/material';
import React from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';

const MediaRow = ({medias}) => {
    return (
        <Box className="media-row" >

            {
                medias && medias.map((media, index) => {
                        
                    return <MediaPoster 
                                key={media.id}
                                posterPath = {media.poster_path}
                                name = {media.name}
                            />
                        
                })   
            }

        </Box>
    )
}

export default MediaRow
