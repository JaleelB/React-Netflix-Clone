import { Box, Link } from '@mui/material';
import React from 'react';
import '../../containers/MediaRow/MediaRow.scss';


const MediaPoster = ({posterPath, name, netflixOriginal}) => {
    
    return (
        <Link>
            <Box className='media-poster stacked' sx={{width: '100%', height: '100%'}}>
           { netflixOriginal && <img className="netflix-icon"src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/> }
                <img className="media-poster-image" draggable="false" style={{ inlineSize: '100%', objectFit: 'cover'}} src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={name}/>
            </Box>
        </Link>
    )
}

export default MediaPoster;
