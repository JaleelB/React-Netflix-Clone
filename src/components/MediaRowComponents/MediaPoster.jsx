import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import {apiComponents} from '../../components';
import '../../containers/MediaRow/MediaRow.scss';


const MediaPoster = ({popupProps, index,posterPath, name, netflixOriginal, posterRef, updatePosterWidth, genreIDs, backdrop, airDate, rating, id, fullscreenProps, typeMedia }) => {
 

    const { 
        setIsHovered,
        setCardPopupWidth,
        setCardPopupHeight,
        setDelayed,
        setDelayHandler,
        setPosterIndex,
        setGenres,
        delayHandler,
        setCardPopupBackdrop,
        setCardPopupAirDate,
        setCardPopupTitle,
        setCardPopupRating,
    } = popupProps;

    const {
        setPosterID, setOpenFullscreenPopup, setMediaType, setNetflixOriginalShow,
    } = fullscreenProps;
    
    useEffect(()=>{
        updatePosterWidth(Math.floor(posterRef.current.clientWidth));
    },[posterRef, updatePosterWidth])


    const getGenres = () => {

        const genres = [];

        for(let genreItem in genreIDs){
            for(let i=0; i<apiComponents[3].length; i++){
                if(genreIDs[genreItem] in apiComponents[3][i]) genres.push(apiComponents[3][i][`${genreIDs[genreItem]}`])
            }
        }

        return genres;
    };

    const handleDelayOnMouseEnter = () => {
        setDelayHandler(setTimeout(() => {
            setDelayed(false)
        }, 700))
    }

    const handleDelayOnMouseLeave = () => {
        clearTimeout(delayHandler)
        // setDelayed(true)
    }

    const handleMediaType = () =>{ if (typeMedia) setMediaType(typeMedia); };

    const handleNetflixOriginal = () =>{
        if(netflixOriginal && typeMedia === 'tv') setNetflixOriginalShow(true);
        else if(netflixOriginal && typeMedia === 'movie') setNetflixOriginalShow(false);
    };

    return (
        // <Link>
            <Box 
                className='media-poster stacked'
                sx={{width: '100%', height: '100%'}}
                ref={posterRef}
                onClick = {(e) => {
                    handleMediaType();                    
                    setPosterID(id);
                    setOpenFullscreenPopup(true);
                    handleNetflixOriginal()
                }}
                onMouseEnter={()=>{
                    setIsHovered(true);
                    handleDelayOnMouseEnter(); 
                    setCardPopupWidth(Math.floor(posterRef.current.getBoundingClientRect().width));
                    setCardPopupHeight(Math.floor(posterRef.current.getBoundingClientRect().height));
                    setPosterIndex(index);
                    setGenres(getGenres());
                    setCardPopupBackdrop('https://image.tmdb.org/t/p/original/' + backdrop);
                    setCardPopupTitle(name);
                    setCardPopupAirDate(airDate);
                    setCardPopupRating(rating);
                    setPosterID(id);
                    handleMediaType();
                    handleNetflixOriginal();
                }}
                onMouseLeave={()=> {
                    handleDelayOnMouseLeave();
                }}
            >
                
                <Box className="media-poster-image-wrapper">
                    { netflixOriginal && posterPath && typeMedia === 'tv' && <img className="netflix-icon"src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="Netflix Icon"/> }
                    <img className={`media-poster-image ${netflixOriginal ? "netflixOriginal" : ''}`} draggable="false"  src={"https://image.tmdb.org/t/p/w500" + posterPath} alt={name}/>
                </Box>

            </Box>
        // </Link>
    )
}

export default MediaPoster;
