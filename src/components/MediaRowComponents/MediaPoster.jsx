import { Box } from '@mui/material';
import React from 'react';
import {usePosterProps} from '../../PosterPropsContext';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import {useRowPopupPropsContext} from '../../RowPropsContext';
import '../../containers/MediaRow/MediaRow.scss';



const MediaPoster = ({ disableHover,index, media, netflixOriginal, typeMedia }) => {

   const posterAttributes = {
        posterPath: media?.poster_path,
        name: media?.name ? media?.name : media?.title,
        genreIDs: media?.genre_ids,
        backdrop: media?.backdrop_path,
        index: index,
        airDate: media?.first_air_date ? media?.first_air_date : media?.release_date,
        rating: media?.vote_average,
        id: media?.id
   };

    const posterProps = usePosterProps();
  
    const { 
        handleDelayOnMount, 
        handleUnmountDelay, 
        getGenres
    } = posterProps; 

    const {  posterWidth, posterRef } = posterProps.usePosterSize();

    const rowPopupProps = useRowPopupPropsContext();
    const { 
        setIsHovered, setCardPopupWidth,
        setPosterIndex, setCardPopupBackdrop, setCardPopupTitle,
        setCardPopupAirDate, setCardPopupRating, setGenres, 
    
    } = rowPopupProps.rowPopupProps;

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        handleNetflixOriginal, setOpenFullscreenPopup, updatePosterId,
        handleMediaType
    } = fullscreenProps.fullscreenProps;
    

    return (
        // <>
            <Box 
                className='media-poster'
                ref={posterRef}
                onClick = {() => {
                    handleMediaType(typeMedia);                    
                    updatePosterId(posterAttributes.id);
                    setOpenFullscreenPopup(true);
                    handleNetflixOriginal(netflixOriginal, typeMedia);
                }}
                onMouseEnter={()=>{

                    if(!disableHover){

                        setIsHovered(true);
                        
                        handleDelayOnMount(); 
                        
                        updatePosterId(posterAttributes.id);
                        setCardPopupWidth(posterWidth);
                        setPosterIndex(posterAttributes.index);
                        setGenres(getGenres(posterAttributes.genreIDs));
                        setCardPopupBackdrop('https://image.tmdb.org/t/p/original/' + posterAttributes.backdrop);
                        setCardPopupTitle(posterAttributes.name);
                        setCardPopupAirDate(posterAttributes.airDate);
                        setCardPopupRating(posterAttributes.rating);
                
                        handleMediaType(typeMedia);
                        handleNetflixOriginal(netflixOriginal, typeMedia);

                    }
                    
                }}
                onMouseLeave={()=> { if(!disableHover) handleUnmountDelay(); }}
            >
                
                <Box className="media-poster-image-wrapper">
                    { netflixOriginal && posterAttributes.posterPath && typeMedia === 'tv' && <img className="netflix-icon"src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="Netflix Icon"/> }
                    <img className={`media-poster-image ${netflixOriginal ? "netflixOriginal" : ''}`} draggable="false"  src={"https://image.tmdb.org/t/p/w500" + posterAttributes.posterPath} alt={posterAttributes.name}/>
                </Box>


            </Box>
            

    );

};

export default MediaPoster;
