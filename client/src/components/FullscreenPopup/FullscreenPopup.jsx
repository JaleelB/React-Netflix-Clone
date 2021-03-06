import { Box, Typography, Button } from '@mui/material';
import React,{useEffect, useContext} from 'react';
import axios from 'axios';
import {apiComponents} from '..';
import FullscreenPosterBackdrop from './FullscreenPosterBackdrop';
import SimiliarMovies from './SimiliarMovies';
import './FullscreenPopup.scss';
import { Add, PlayArrow } from '@mui/icons-material';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';

const FullscreenPopup = () => {

    const {user} = useContext(AuthenticationContext);
    const {apiData} = useFetchApi(`/users/find/${user.details._id}`);

    const fullscreenProps = useFullscreenPropsContext();

    const { 
        setOpenFullscreenPopup, posterID, movie, mediaType,
        setMovie, movieCredits, setMovieCredits, setFullscreenPlayer,
        setSimiliarMovies, similiarMovies, setDisablePointer, setFullVideoPath,
        netflixOriginalShow, setNetflixOriginalShow
    } = fullscreenProps.fullscreenProps;


    useEffect(() => {

        if(mediaType === 'movie'){

            axios
            .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setMovie(res.data)
            })

            axios
            .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/credits?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setMovieCredits(res.data)
            })

            axios
            .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/similar?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setSimiliarMovies(res.data.results)
            })

        }

        if(mediaType === 'tv'){
            axios
            .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setMovie(res.data)
            })

            axios
            .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}/credits?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setMovieCredits(res.data)
            })

            axios
            .get(`${apiComponents[0]}/${apiComponents[2].tv}/${posterID}/similar?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setSimiliarMovies(res.data.results)
            })
        }

    
    },[posterID, setMovie, setMovieCredits, setSimiliarMovies, mediaType]);

    useEffect(() => {
        if(mediaType === 'movie'){
            axios
            .get(`${apiComponents[0]}/${apiComponents[2].movie}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setFullVideoPath(res.data.results[0]?.key)
            })
        }

        if(mediaType === 'tv'){
            axios
            .get(`${apiComponents[0]}${apiComponents[2].tv}/${posterID}/videos?api_key=${apiComponents[1]}&language=en-US`)
            .then((res)=> {
                setFullVideoPath(res.data.results[0]?.key)
            })
        }
    
    },[posterID, setFullVideoPath, mediaType]);

    
    const getMovieGenres = () => {
        let genres = [];
        
        movie.genres.map((genre)=>{
                genres.push(genre.name);
        });

        return genres;
    };

    const getCrewGenres = () => {
        let credits = [];

        movieCredits.crew.map((credit)=>{
            credits.push(credit.name);
        });

        return credits;
    };

    const getCastGenres = () => {
        let cast = [];
        
        movieCredits.cast.map((castMember)=>{
            cast.push(castMember.name);
        });

        return cast;
    };



    const removeNetflixOriginal = () => { if(netflixOriginalShow) setNetflixOriginalShow(false);  }

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
                        removeNetflixOriginal();
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn" role="button" aria-label="close" tabIndex="0">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path>
                    </svg>
                </Box>


                <Box 
                    className="fullscreen-popup__backdrop-container"
                >
                    <FullscreenPosterBackdrop 
                        cast={getCastGenres}
                        crew={getCrewGenres}
                        genres={getMovieGenres}
                        movie={movie}
                    />
                    {movie?.backdrop_path && <Box className="fade-bottom"></Box> }
                </Box>
                

                <Box className="fullscreen-popup__info">

                    <Box className="fullscreen-popup__details-container">
                        <Box className="info-container">

                            {(movie?.title ? movie?.title : movie?.name ) && window.innerWidth < 601 && <Typography className="backdrop-title" variant="body" component="h1">{movie?.title ? movie?.title : movie?.name}</Typography>}

                            {netflixOriginalShow && mediaType === 'tv' && <Box className="netflix-listing" sx={{display: 'flex', gap: '1rem'}}>
                                <img className="netflix-icon" src="https://cdn4.iconfinder.com/data/icons/erroros-and-brands/512/227_Netflix_erroro-1024.png" alt="Netflix Icon"/>
                                <Typography className="listing-supplemental-message" sx={{color :'#fff'}}>Netflix Show</Typography>
                            </Box>}

                            <Box className="movie-metadata-container">
                                {movie?.vote_average && <Box className="movie-rating">{movie?.vote_average * 10}%</Box>}
                                <Box className="movie-air-date">{movie?.release_date ? movie?.release_date : movie?.first_air_date}</Box>
                                <Box className="movie-video-quality">HD</Box>
                            </Box>

                            <Box className="genres">
                                Genres:
                                <Box className="genres-list">
                                    {
                                        movie?.genres && movie?.genres.map((genre, index) => {

                                            if(index === 0 && movie?.genres.length < 1) return <Typography key={index}>{' ' + genre.name}</Typography>
                                            if(index === 0 && movie?.genres.length > 1) return <Typography key={index}>{' ' + genre.name + ', '}</Typography>
                                            if(index < movie?.genres.length - 1) return <Typography key={index}>{genre.name + ', '}</Typography>
                                            else return genre.name
                                        })
                                    }
                                </Box>
                            </Box>


                            {window.innerWidth < 901 &&
                                <Box className="mobile-btn-container">
                                    <Button 
                                        className="mobile-btn-play"
                                        onClick = {() => {
                                            setDisablePointer(true);
                                            setFullscreenPlayer(true);
                                        }}
                                    >
            
                                        <PlayArrow className="play-icon popup-icon"/>
                                        Play
            
                                    </Button>

                                    <Button 
                                        className="mobile-btn-add"
                                        onClick = {() => {
                                    
                                            axios.put(`/users/saveMovie/${apiData._id}`, {
        
                                                id: movie.id,
                                                title: movie.title ? movie.title : movie.name,
                                                description: movie.overview ? movie.overview : '',
                                                poster_path: movie.poster_path,
                                                backdrop_path: movie.backdrop_path,
                                                release_date: movie?.release_date ? movie?.release_date : movie?.first_air_date,
                                                mediaType: mediaType,
                                                vote_average: movie.vote_average,
                                                genres: getMovieGenres(),
                                                cast: getCastGenres(),
                                                crew: getCrewGenres()
                                                
                                            });

                                            
                                            window.location.reload(false);
        
                                        }}
                                    >
                                        <Add className="play-icon popup-icon" />
                                        My List 
            
                                    </Button>
                                </Box>
                            }


                            <Box className="movie-overview">
                                { movie?.overview && movie?.overview }
                            </Box>
                        </Box>
                        
                        <Box className="similiar-container">

                            { similiarMovies && 
                                <SimiliarMovies
                                    className = {"similiar-movies-gallery"}
                                    title={"Similiar Shows"}
                                    medias = {similiarMovies}
                                    typeMedia={mediaType} 
                                    disableHover
                                /> 
                            }


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
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FullscreenPopup;
