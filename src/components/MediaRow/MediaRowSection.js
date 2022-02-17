import { Box,Typography } from '@mui/material';
import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import apiComponents from '../../components/API/Api';


const MediaRowSection = ({title, medias}) => {

    const genreNames = [
        {28: 'Action' },        
        {12: 'Adventure'},
        {16: 'Animation'},
        {35: 'Comedy'},
        {80: 'Crime'},
        {99: 'Documentary'},
        {18: 'Drama'},
        {10751: 'Family'},
        {14: 'Fantasy'},
        {36: 'History'},
        {27: 'Horror'},
        {10402: 'Music'},
        {10749: 'Romance'},
        {878: 'Science Fiction'},
        {10770: 'TV Movie'},
        {53: 'Thriller'},
        {10752:'War'},
        {37: 'Western'},
        {10759: 'Action & Adventure'},
        {80: 'Crime'},
        {99: 'Documentary'},
        {10762: 'Kids'},
        {9648: 'Mystery'},
        {10763:'News'},
        {10764:'Reality'},
        {10765:'Sci-Fi & Fantasy'},
        {10766: 'Soap'},
        {10767: 'Talk'},
        {10768: 'War & Politics'},
        {37: 'Western'}
    ];
    
    
    // const [movieGenreName, setMovieGenreName] = useState([]);
    // const [tvGenreName, setTvGenreName] = useState([]);
    // useEffect(() => {
    //     axios
    //     .get(`${apiComponents[0]}/discover/movie?api_key=${apiComponents[1]}&language=en-US`)
    //     .then((res) => setMovieGenreName(res.data.genres[0].name));

    //     //   axios
    //     //   .get(`${apiComponents[0]}/genre/tv/list?api_key=${apiComponents[1]}&language=en-US`)
    //     //   .then((res) => setTvGenres(res.data.genres));
      
    // }, []);

    //https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

    const handleObjectNameKey = (object)=>{
        let value =  ('name' in object) ? 'name' : 'title';
        return value;
    };

    const makeObjectArray = (object) =>{
        let objectToArray = [];
        // console.log("object", object);
        for(let objectItem in object){
            
            for(let i=0; i<genreNames.length; i++){
                if(object[objectItem] in genreNames[i]){
                    objectToArray.push(genreNames[i][`${object[objectItem]}`])
                }
            }
        }
        if(objectToArray.length > 3) objectToArray.pop();
        return objectToArray;
    };
    
    return (
        <Box className="media-container" sx={{
            margin: '0 auto'
        }}>
            <Box className="title-wrapper" sx={{paddingLeft: '1rem'}}>
                <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
            </Box>
             
            <Box className="media-row" sx={{
                display: 'grid', gap: '1rem', gridAutoFlow: 'column',
                // gridAutoColumns:'11%',
                padding: '3rem 1rem', margin: '0', overflowX: 'auto',
            }}>
                {
                    
                    medias.map((media) => {
                        
                        // console.log(media);
                        return <Box key={media.id} className="media-poster stacked" sx={{width: '9rem', position: 'relative'}}>
                                    <img className="media-poster-image" style={{ inlineSize: '100%', objectFit: 'cover'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                                    <Box className="media-poster-content">

                                        <Typography className="media-name" variant="subtitle1" component="h2">{media[handleObjectNameKey(media)]}</Typography>
                                        <Box className="media-poster-media_type-details">
                                            <Typography className='media-poster-media_type' variant="subtitle2" component="h4"> 
                                                {media.media_type.toUpperCase()}
                                            </Typography>
                                            <Typography className="media-rating" variant="subtitle2" component="h4">{media.vote_average}</Typography>
                                        </Box>
                                        <Box className="media-genres">
                                            <ul className="genre-list">
                                                {
                                                    makeObjectArray(media.genre_ids).map((genre, index) => {
                                                        return <li key={index} className="genre-text"><Typography variant="subtitle2" component="h4">{genre}</Typography></li>
                                                    })
                                                    
                                                }
                                            </ul>
                                        </Box>
                                        
                                    </Box>
                                    
                                    <Box className="overlay"></Box>
                                </Box>
                    })   
                }     
            </Box>
        </Box> 
    )
}

export default MediaRowSection;
