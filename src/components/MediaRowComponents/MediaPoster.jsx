import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {usePosterProps} from '../../PosterPropsContext';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import {useRowPopupPropsContext} from '../../RowPropsContext';
import {apiComponents } from '../../components';
import '../../containers/MediaRow/MediaRow.scss';



const MediaPoster = ({ disableHover, popupProps, index,posterPath, name, netflixOriginal, genreIDs, backdrop, airDate, rating, id, typeMedia }) => {

    // const { 
    //     setIsHovered, setCardPopupWidth, setCardPopupHeight,
    //     setDelayMount, setDelayHandler, setPosterIndex, delayMount,
    //     setGenres, delayHandler, setCardPopupBackdrop,
    //     setCardPopupAirDate, setCardPopupTitle, setCardPopupRating,
    //     setPosterWidth
    // } = popupProps;


    // const {
    //     setPosterID, setOpenFullscreenPopup, setMediaType, 
    //     setNetflixOriginalShow
        
    // } = fullscreenProps;


    // useEffect(()=>{
        
    //         setPosterWidth(posterRef.current.getBoundingClientRect().width)
                
    // },[posterRef.current]); 
    
    // const handlePosterSizeOnLoad = () => {
    //     setPosterWidth(posterRef.current.getBoundingClientRect().width);
    // };

    

    const posterProps = usePosterProps();
    // console.log(posterProps)
    const { 
        handleDelayOnMount, 
        handleUnmountDelay, 
        getGenres
    } = posterProps; 

    const { posterHeight, posterWidth, posterRef } = posterProps.usePosterSize();

    const rowPopupProps = useRowPopupPropsContext();
    const { 
        setIsHovered, setCardPopupWidth, setCardPopupHeight,
        setPosterIndex, setCardPopupBackdrop, setCardPopupTitle,
        setCardPopupAirDate, setCardPopupRating, delayHandler, setGenres,
        delayMount, setDelayMount, setDelayHandler
    } = rowPopupProps.rowPopupProps;

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        handleNetflixOriginal, handleFullscreenModal, updatePosterId,
        handleMediaType
    } = fullscreenProps.fullscreenProps;

    // const getGenres = () => {

    //     const genres = [];

    //     for(let genreItem in genreIDs){
    //         for(let i=0; i<apiComponents[3].length; i++){
    //             if(genreIDs[genreItem] in apiComponents[3][i]) genres.push(apiComponents[3][i][`${genreIDs[genreItem]}`])
    //         }
    //     }

    //     return genres;
    // };

    // const handleDelayOnMount = () => {

    //     if(delayMount) setDelayMount(false);  
       
    //     setDelayHandler(setTimeout(() => {
    //         setDelayMount(true);
    //     }, 700))

    // }

    // const handleUnmount = () => {
    //     clearTimeout(delayHandler)
    // }


    // const handleMediaType = () =>{ if (typeMedia) setMediaType(typeMedia); };

    // const handleNetflixOriginal = () =>{
    //     if(netflixOriginal && typeMedia === 'tv') setNetflixOriginalShow(true);
    //     else if(netflixOriginal && typeMedia === 'movie') setNetflixOriginalShow(false);
    // };

 

    return (
        // <>
            <Box 
                className='media-poster'
                ref={posterRef}
                onClick = {() => {
                    handleDelayOnMount();
                    handleMediaType(typeMedia);                    
                    updatePosterId(id);
                    handleFullscreenModal();
                    handleNetflixOriginal(netflixOriginal, typeMedia);

                }}
                onMouseEnter={()=>{

                    if(!disableHover){

                        setIsHovered(true);
                        handleDelayOnMount(); 
                        updatePosterId(id);
                        setCardPopupWidth(posterWidth);
                        setCardPopupHeight(posterHeight);
                        setPosterIndex(index);
                        setGenres(getGenres());
                        setCardPopupBackdrop('https://image.tmdb.org/t/p/original/' + backdrop);
                        setCardPopupTitle(name);
                        setCardPopupAirDate(airDate);
                        setCardPopupRating(rating);
                
                        handleMediaType(typeMedia);
                        handleNetflixOriginal(netflixOriginal, typeMedia);

                    }
                    
                }}
                onMouseLeave={()=> { if(!disableHover) handleUnmountDelay(delayHandler); }}
            >
                
                <Box className="media-poster-image-wrapper">
                    { netflixOriginal && posterPath && typeMedia === 'tv' && <img className="netflix-icon"src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="Netflix Icon"/> }
                    <img className={`media-poster-image ${netflixOriginal ? "netflixOriginal" : ''}`} draggable="false"  src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={name}/>
                </Box>


            </Box>
            

    );

};

export default MediaPoster;
