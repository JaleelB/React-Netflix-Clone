import { Box } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';


const MediaRow = ({ medias, popupProps, wrapperRef, netflixOriginal, fullscreenProps, typeMedia, className, disableHover }) => {

    const [posterWidth, setPosterWidth] = useState(0);
    
    const posterRef = useRef(null);
    const rowContainerRef = useRef(null);

    const { setRowPadding, distance, setContainerWidth, setTotalPostersInView } = popupProps;


    useEffect(()=>{
        const rowPadding = window.getComputedStyle(rowContainerRef.current).getPropertyValue('padding-left');
        const rowPaddingValue = Number(rowPadding.substring(0, rowPadding.length - 3));
        const rowContainerWidth = wrapperRef.current.clientWidth - (rowPaddingValue * 2);

        setContainerWidth(Math.floor(rowContainerWidth));
        setRowPadding(Math.floor(rowPaddingValue));
        setTotalPostersInView(Math.floor(rowContainerWidth / posterWidth));

        console.log(rowContainerWidth, posterWidth);
        
        
    },[posterWidth, setContainerWidth, setRowPadding,  setTotalPostersInView, wrapperRef ]);   


    return (

        <Box 
            className={`media-row ${netflixOriginal ? 'large-row' : ''} ${className ? className: ''}`}
            ref={rowContainerRef}
            sx={{transform: `translate3d(${distance}px, 0, 0)`}}
        >
            {
                medias && medias.map((media, index) => {   
                    
                    return <MediaPoster
                                updatePosterWidth = {setPosterWidth}
                                posterRef={posterRef}
                                rowContainerRef= {rowContainerRef}
                                key={media.id}
                                posterPath = {media?.poster_path}
                                name = {media?.name ? media?.name : media?.title}
                                genreIDs = {media?.genre_ids}
                                backdrop = {media?.backdrop_path}
                                popupProps = {popupProps}
                                index = {index}
                                airDate={media?.first_air_date ? media?.first_air_date : media?.release_date}
                                rating={media?.vote_average}
                                id={media?.id}
                                fullscreenProps = {fullscreenProps}
                                typeMedia={typeMedia}
                                disableHover={disableHover}
                                netflixOriginal={netflixOriginal}
                            />
                                
                })   
            }
        </Box>
  
    )
}

export default MediaRow;


