import { Box } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';


const MediaRow = ({medias, wrapperRef, netflixOriginal,updateTotalPosters, distance, updateContainerWidth}) => {

    const [posterWidth, setPosterWidth] = useState(0);
    
    const posterRef = useRef(null);
    const rowContainerRef = useRef(null);

    useEffect(()=>{
        const rowPadding = window.getComputedStyle(rowContainerRef.current).getPropertyValue('padding-left');
        const rowPaddingValue = Number(rowPadding.substring(0, rowPadding.length - 3));
        const rowContainerWidth = wrapperRef.current.clientWidth - (rowPaddingValue * 2);

        updateContainerWidth(Math.floor(rowContainerWidth));
        updateTotalPosters(Math.floor(rowContainerWidth / posterWidth));
        
    },[wrapperRef.current, rowContainerRef.current, posterWidth]);    
   

    return (

        <Box 
            className="media-row" 
            ref={rowContainerRef}
            sx={{transform: `translate3d(${distance}px, 0, 0)`}}
        >
            {
                medias && medias.map((media) => {
                                
                    return <MediaPoster
                                updatePosterWidth = {setPosterWidth}
                                posterRef={posterRef}
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

export default MediaRow;


