import { Box, Link } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../../containers/MediaRow/MediaRow.scss';


const MediaPoster = ({posterPath, name, netflixOriginal, posterRef, updatePosterWidth}) => {

    // const[isHovered, setIsHovered] = useState(false);
    
    useEffect(()=>{
        updatePosterWidth(Math.floor(posterRef.current.getBoundingClientRect().width));
    },[posterRef.current])


    return (
        // <Link>
            <Box 
                className='media-poster stacked' 
                sx={{width: '100%', height: '100%'}}
                ref={posterRef}
                // onMouseEnter={()=> setIsHovered(!isHovered)}
                // onMouseLeave={()=> setIsHovered(!isHovered)}
            >
                { netflixOriginal && posterPath && <img className="netflix-icon"src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="Netflix Icon"/> }
                <Box className="media-poster-image-wrapper">
                    <img className="media-poster-image" draggable="false"  src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={name}/>
                </Box>
            </Box>
        // </Link>
    )
}

export default MediaPoster;
