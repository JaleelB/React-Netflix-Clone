import { Box } from '@mui/material';
import React, {useEffect}  from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';
import {useRowPopupPropsContext} from '../../RowPropsContext';


const MediaRow = ({ medias, netflixOriginal, typeMedia, className, disableHover }) => {


    const rowPopupProps = useRowPopupPropsContext();
    const { rowTabIndex, rowRef, setPostersInView } = rowPopupProps.rowPopupProps;

    useEffect(()=>{
        setPostersInView(Math.round(Number(getComputedStyle(rowRef.current).getPropertyValue("--total-posters-in-viewport"))))
    },[rowRef.current])


    return (

        <Box 
            className={`media-row ${className ? className: ''}`}
            ref={rowRef}
            sx={{transform: `translate3d(calc(${rowTabIndex} * -100%), 0px, 0px)`}}
        >
            {
                medias && medias.map((media, index) => {   
                    
                    return <MediaPoster
                                key={media.id}
                                posterPath = {media?.poster_path}
                                name = {media?.name ? media?.name : media?.title}
                                genreIDs = {media?.genre_ids}
                                backdrop = {media?.backdrop_path}
                                // popupProps = {popupProps}
                                index = {index}
                                airDate={media?.first_air_date ? media?.first_air_date : media?.release_date}
                                rating={media?.vote_average}
                                id={media?.id}
                                // wrapperRef={wrapperRef}
                                // fullscreenProps = {fullscreenProps}
                                typeMedia={typeMedia ? typeMedia : media?.media_type}
                                disableHover={disableHover}
                                netflixOriginal={netflixOriginal}
                            />
                                
                })   
            }
        </Box>
  
    )
}

export default MediaRow;


