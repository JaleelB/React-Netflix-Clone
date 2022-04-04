import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import {MediaRowTitle} from '../../components';
import FilterButtonIcon from './FilterButtonIcon';

import './FilterButtons.scss'

const FilterButtons = ({fullscreenProps,setIsGenreList, setGenreListID, setIsLoading}) => {

    const {genreID, setGenreID, setGenreTitle} = fullscreenProps;

    const moiveGenres = [
       "Action",
       "Animation",
       "Comedy",
       "Crime",
       "Documentary",
      "Drama",
        "Fantasy",
       "Horror",
    //    "International",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Western"
    ];

    const genreCodes = [28, 16, 35, 80, 99, 18, 14, 27, 9648, 10749, 878, 53, 37];

    const buttonImages = [
        "https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg",
        "https://i.pinimg.com/originals/c4/28/7f/c4287fe2ea2eb96845ebcca6aed92d35.png",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-1-28-comedies-1611856048.png?crop=0.407xw:0.814xh;0.0465xw,0.0449xh&resize=640:*",
        "https://www.thefactsite.com/wp-content/uploads/2018/11/true-crime-movies.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTg3NzY4NTI3N15BMl5BanBnXkFtZTgwMzc0MDc4NDM@._V1_.jpg",
        "https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg",
        "https://www.gamersdecide.com/sites/default/files/styles/news_images/public/top-25-fantasy-movies-2019_5.jpeg",
        "https://media.gq.com/photos/59efa5f866e2d56abcd7a055/master/pass/state-of-horror-gq.jpg",
        "https://www.who.com.au/media/24144/get-out-hypnosis.jpg?width=720&center=0.0,0.0",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-romantic-movies-portrait-of-a-lady-1586207152.jpeg",
        "https://www.superherohype.com/assets/uploads/2019/12/Edge-of-Tomorrow-1280x720.jpg",
        "http://www.tasteofcinema.com/wp-content/uploads/2019/01/best-thrillers-2018.jpg",
        "https://www.cowboysindians.com/wp-content/uploads/2018/07/DM_Opener.jpg"
    ];

    const genreMovieListIDs = [256,5903,9226,0,7060321,2654,2151,79828,24370,37375,3945,44,0]; 

    useEffect(() => {
       for(let i=0; i<genreCodes.length; i++) 
            if(genreID === genreCodes[i]){
                setIsGenreList(true);
                setGenreListID(genreMovieListIDs[i]);
            }
    }, [genreID])
    

    return (
        <Box className="filters-container">
            <MediaRowTitle title="Genres"/>
            <Box className="filter-row">
                
                {
                    moiveGenres.map((genre, index)=>{
                        return(
                            <Box 
                                className = "filter-container"
                                key={index}
                                onClick={() => {
                                    setGenreTitle(genre);
                                    setIsLoading(true);
                                    // handleActiveGenre(e);
                                }}
                            >
                                <FilterButtonIcon 
                                    genre={genre}
                                    setGenreID={setGenreID} 
                                    background={buttonImages[index]}
                                    genreID={genreCodes[index]}
                                    // activeGenre={activeGenre}
                                    // setActiveGenre={setActiveGenre}
                                />

                            </Box>
                        );
                    })
                }

            </Box>
        </Box>

    )
}

export default FilterButtons;
