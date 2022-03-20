import { Box, Typography } from '@mui/material';
import React,{useEffect} from 'react';
import axios from 'axios';
import {apiComponents} from '../../components';
import FullscreenPosterBackdrop from './FullscreenPosterBackdrop';
import SimiliarMovie from './SimiliarMovie';
import './FullscreenPopup.scss';

const FullscreenPopup = ({fullscreenProps}) => {

    const { 
        setOpenFullscreenPopup, posterID, movie, 
        setMovie, movieCredits, setMovieCredits,
        setSimiliarMovies, similiarMovies, setDisablePointer 
    } = fullscreenProps;

    useEffect(() => {

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setMovie(res.data)
            console.log(res.data)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/credits?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setMovieCredits(res.data)
            console.log(res.data)
        })
        .catch(error => { console.log(error) })

        axios
        .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/similar?api_key=${apiComponents[1]}&language=en-US`)
        .then((res)=> {
            setSimiliarMovies(res.data.results)
            console.log(res.data)
        })
        .catch(error => { console.log(error) })

    
    },[posterID, setMovie]);

    return (
        <Box 
            className="fullscreen-popup" 
            onLoad={() => {
                document.body.style.overflow = "hidden"; 
                setDisablePointer(true);
            }}
        >

            <Box className="fullscreen-popup-inner">
                <Box 
                    className="fullscreen-popup__close"
                    onClick = {() => {
                        setOpenFullscreenPopup(false);
                        document.body.style.overflowY = "scroll";
                        setDisablePointer(false);
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn" role="button" aria-label="close" tabIndex="0">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path>
                    </svg>
                </Box>
                <Box 
                    className="fullscreen-popup__backdrop-container"
                >
                    <FullscreenPosterBackdrop backdrop={movie?.backdrop_path} title={movie?.title}/>
                    {movie?.backdrop_path && <Box className="fade-bottom"></Box> }
                </Box>

                <Box className="fullscreen-popup__info">

                    <Box className="fullscreen-popup__details-container">
                        <Box className="info-container">
                            <Box className="movie-metadata-container">
                                {movie?.vote_average && <Box className="movie-rating">{movie?.vote_average * 10}%</Box>}
                                {movie?.release_date && <Box className="movie-air-date">{movie?.release_date}</Box>}
                                <Box className="movie-video-quality">HD</Box>
                            </Box>
                            <Box className="genres">
                                Genres:
                                {
                                    movie?.genres && movie?.genres.map((genre, index) => {

                                        if(index == 0 && movie?.genres.length > 1) return ' ' + genre.name + ', '
                                        if(index < movie?.genres.length - 1) return genre.name + ', '
                                        else return genre.name
                                    })
                                }
                            </Box>
                            <Box className="movie-overview">
                                { movie?.overview && movie?.overview }
                            </Box>
                        </Box>
                        
                        <Box className="similiar-container">
                            <Typography variant="subtitle" component="h3" sx={{marginBottom: '.2rem'}}>Similiar Shows: </Typography>
                            <Box className="similiar-movies">
                                {
                                    similiarMovies && similiarMovies.map((recommendation) => {
                                        return <SimiliarMovie posterPath = {"https://image.tmdb.org/t/p/w500" + recommendation?.poster_path}/>
                                    })
                                }
                            </Box>
                        </Box>

                        <Box className="cast-container">
                            <Typography variant="subtitle" component="h3" sx={{marginBottom: '.2rem'}}>Cast: </Typography>
                            {
                                movieCredits.cast && movieCredits.cast.map((castMember, index) => {
                                    if(index < movieCredits.cast.length - 1) return castMember.name + ', '
                                    else return castMember.name
                                })
                            }
                        </Box>
                        <Box className="crew-container">
                            <Typography variant="subtitle" component="h3" sx={{marginBottom: '.2rem'}}>Crew: </Typography>
                            {
                                movieCredits.crew && movieCredits.crew.map((crewMember, index) => {
                                    if(index < movieCredits.crew.length - 1) return crewMember.name + ', '
                                    else return crewMember.name
                                })
                            }
                        </Box>
                        
                        <Box className="trailers-container"></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FullscreenPopup;
