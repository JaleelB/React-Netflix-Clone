import { Box, Typography } from '@mui/material';
import React from 'react';

import './FilterButtons.scss'

const FilterButtons = () => {

    const moiveGenres = [
       "Action",
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

    const buttonImages = [
        "https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg",
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
    

    return (
        <Box className="filter-row">
            
            {
                moiveGenres.map((genre, index)=>{
                    return(
                        <Box 
                            className = "filter-container"
                            key={index}
                            // sx={{width: '10vw'}}
                        >

                            <Box className="genre-icon" sx={{backgroundImage: `url(${buttonImages[index]})`}}>
                                <Box className="genre-title-wrapper">
                                    <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
                                </Box>
                            </Box>

                            {/* <Box className="genre-title-wrapper">
                                <Typography className="genre-title" variant="subtitle1" component="h4">{genre}</Typography>
                            </Box> */}
                        

                        </Box>
                    );
                })
            }

        </Box>
    )
}

export default FilterButtons;
