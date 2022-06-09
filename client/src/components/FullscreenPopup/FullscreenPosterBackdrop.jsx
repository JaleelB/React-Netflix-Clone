import { Box, Typography, Button } from '@mui/material';
import { PlayArrow, ThumbDownOffAlt, ThumbUpOffAlt, DoNotDisturbAltOutlined } from '@mui/icons-material';
import React, {useContext} from 'react';
import axios from "axios";
import './FullscreenPopup.scss';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';


const FullscreenPosterBackdrop = ({movie, cast, crew, genres}) => {

    const {user} = useContext(AuthenticationContext);
    const {apiData} = useFetchApi(`/users/find/${user.details._id}`);

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        setDisablePointer, setFullscreenPlayer, fullscreenPlayer, 
        fullVideoPath, mediaType
    } = fullscreenProps.fullscreenProps;


    return (
        <Box className="popup-backdrop stacked">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path ? movie.backdrop_path : ''}`} alt=""/>
            

            {window.innerWidth > 900 && <Box className="movie-title-button-action">

                <Typography className="backdrop-title" variant="subtitle" component="h1">{movie.title ? movie.title : movie.name}</Typography>
                 <Box className="button-container">

                    <Button 
                        className={`button-play ${!fullVideoPath ? 'disabled' : ''}`}
                        variant = {!fullVideoPath ? 'disabled' : ''}
                        onClick = {() => {
                            setDisablePointer(true);
                            setFullscreenPlayer(!fullscreenPlayer);
                        }}
                    >

                        { !fullVideoPath && <DoNotDisturbAltOutlined className="play-icon popup-icon"/>}
                        { !fullVideoPath &&  "No Videos Available" }

                        { fullVideoPath && <PlayArrow className="play-icon popup-icon"/>}
                        { fullVideoPath &&  "Play" }
                        

                    </Button>

                    <Box className="popup-icons">
                        <Button
                                className="popup-icon add" 
                                onClick = { () => {
                                    
                                    axios.put(`/users/saveMovie/${apiData._id}`, {
            
                                        id: movie.id,
                                        title: movie.title ? movie.title : movie.name,
                                        description: movie.overview ? movie.overview : '',
                                        poster_path: movie.poster_path,
                                        backdrop_path: movie.backdrop_path,
                                        release_date: movie?.release_date ? movie?.release_date : movie?.first_air_date,
                                        mediaType: mediaType,
                                        vote_average: movie.vote_average,
                                        genres: genres,
                                        cast: cast,
                                        crew: crew
                                        
                                    });

                                    window.location.reload(false);

                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M32 16v32m16-16H16"></path>
                                </svg>
                        </Button>
                        <ThumbUpOffAlt className="popup-icon like"/>
                        <ThumbDownOffAlt className="popup-icon dislike"/>
                    </Box>
                    
                </Box>

            </Box>}
            
            
        </Box>
    )
}

export default FullscreenPosterBackdrop;
