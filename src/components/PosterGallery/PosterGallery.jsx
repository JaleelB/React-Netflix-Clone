import { Box, Typography } from '@mui/material';
import React, {useState} from 'react';
import { MediaRowContainer } from '../../containers';
import { MediaRowTitle } from '../../components';

import './PosterGallery.scss';

const PosterGallery = ({medias, title, className, errorMessage}) => {

    const [fullscreenPlayer, setFullscreenPlayer] = useState(false);
    const[fullVideoPath, setFullVideoPath] = useState('');
    const [posterID, setPosterID] = useState(0);
    const [netflixOriginalShow, setNetflixOriginalShow] = useState(false);

    const [openFullscreenPopup, setOpenFullscreenPopup] = useState(false);
    const [movie, setMovie] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [similiarMovies, setSimiliarMovies] = useState([]);
    const [disablePointer, setDisablePointer] = useState(false);
    const [mediaType, setMediaType] = useState('');
    // const[isHovered, setIsHovered] = useState(false);

    const [volume, setVolume] = useState(1);

    const fullscreenProps = {
        fullscreenPlayer, setFullscreenPlayer,
        fullVideoPath, setFullVideoPath,
        posterID, setPosterID,
        openFullscreenPopup, setOpenFullscreenPopup,
        movie, setMovie, movieCredits, setMovieCredits,
        similiarMovies, setSimiliarMovies,
        disablePointer, setDisablePointer,
        netflixOriginalShow, setNetflixOriginalShow,
        volume, setVolume,
        mediaType, setMediaType
    };

    return (
        <Box className="poster-gallery-container">
            
            <MediaRowTitle title={title}/>
            <MediaRowContainer 
                className = {className}
                medias = {medias}
                fullscreenProps = { fullscreenProps } 
                typeMedia={"tv"} //try maling a category called all and add it to useeffect
                netflixOriginal={false}
                disableHover
            />
           { errorMessage && 
                <Box 
                    className="error-message-container"
                    sx={{display:'grid', placeContent:'center'}}
                >
                    <Typography 
                        className="error-message" 
                        variant="subtitle1" 
                        component="h6"
                        sx={{whiteSpace:'pre-line'}}
                    >
                        {errorMessage}
                    </Typography> 
                </Box>
            }    

        </Box>
    )
}

export default PosterGallery;
