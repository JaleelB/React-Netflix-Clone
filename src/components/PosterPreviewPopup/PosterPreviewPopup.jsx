import { Box, Button, Tooltip, Typography } from '@mui/material';
import { PlayCircle, ThumbDownOffAlt, ThumbUpOffAlt } from '@mui/icons-material';
import React, {useEffect} from 'react';
import axios from 'axios';
import {apiComponents, BootstrapTooltip } from '../../components';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import {useRowPopupPropsContext} from '../../RowPropsContext';

import './PosterPreviewPopup.scss';



const PosterPreviewPopup = () => {



    const rowPopupProps = useRowPopupPropsContext();
    const { 
        cardPopupWidth, genres, unmountStyle,
        rowPadding, posterIndex,setIsHovered, postersInView,
        cardPopupBackdrop,cardPopupTitle,rowTabIndex, mountStyle,
        cardPopupAirDate, cardPopupRating, isHovered, handleUnmountOnMouseLeave
    } = rowPopupProps.rowPopupProps;

    const fullscreenProps = useFullscreenPropsContext();
    const {
        fullscreenPlayer, setFullscreenPlayer, setFullVideoPath, posterID, 
        setOpenFullscreenPopup, netflixOriginalShow, setNetflixOriginalShow, mediaType
    } = fullscreenProps.fullscreenProps;

    const removeNetflixOriginal = () => { if(netflixOriginalShow) setNetflixOriginalShow(false);  }


    useEffect(() => {

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}${apiComponents[2].tv}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setFullVideoPath(res.data.results[0]?.key)
            // console.log(res.data.results[0]?.key)
        })
        .catch(error => { console.log(error) })

    
    },[posterID, setFullVideoPath]);



    return (
        <Box 
            className="preview-popup"
            sx={{
                top: `-${rowPadding - 15}px`,
                width: `${cardPopupWidth * 1.75}px`,
                height: `${cardPopupWidth * 2.05}px`,
                left: `${
                    // (
                            (
                                cardPopupWidth * (posterIndex >= postersInView ? 
                                posterIndex  - (postersInView * rowTabIndex) : posterIndex)
                            )
                    //          - rowPadding 
                    // )
                        }px`
            }}
            style={isHovered ? mountStyle  : unmountStyle}
            onMouseLeave={()=> {
                setIsHovered(false)
                handleUnmountOnMouseLeave();
                removeNetflixOriginal()
            }}

        >  
            <Box className="media-poster-info-popup">

                <Box className="media-popup-container stacked">
                    <img src={cardPopupBackdrop} alt='movie backdrop'/>
                    <Typography className="popup-container-title" variant="subtitle" component="h3">{cardPopupTitle}</Typography>
                </Box>

                <Box className="media-popup-info">
                    <Box className="button-controls-container">

                        <PlayCircle 
                            className="popup-icon play" 
                            onClick={() => {
                                setFullscreenPlayer(!fullscreenPlayer);
                            }}
                        />

                        <BootstrapTooltip title="Add To List">
                            <Button
                                className="popup-icon add" 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M32 16v32m16-16H16"></path>
                                </svg>
                            </Button>
                        </BootstrapTooltip>
                        
                        <BootstrapTooltip title="Like">
                            <ThumbUpOffAlt className="popup-icon like"/>
                        </BootstrapTooltip>
                        
                        <BootstrapTooltip title="Dislike">
                            <ThumbDownOffAlt className="popup-icon dislike"/>
                        </BootstrapTooltip>
                        
                        <BootstrapTooltip title="More Information">
                            <Button
                                className="popup-icon details-button"
                                onClick = {() => setOpenFullscreenPopup(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path  d="M20 26l11.994 14L44 26"></path>
                                </svg>
                            </Button>
                        </BootstrapTooltip>
                    </Box>

                    <Box className="movie-metadata-container">
                        <Box className="movie-rating">{cardPopupRating * 10}%</Box>
                        {mediaType !== '' && <Box className="media-type">{mediaType}</Box>}
                        <Box className="movie-air-date">{cardPopupAirDate}</Box>
                        <Box className="movie-video-quality">HD</Box>
                    </Box>

                    <Box className="genre-list">
                        <ul>
                            {
                                genres.map((genre, index)=>{
                                    return (
                                        <li key={index} className="genre">
                                            {genre}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PosterPreviewPopup;
