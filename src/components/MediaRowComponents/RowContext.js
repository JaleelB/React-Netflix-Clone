import React, {useState, createContext} from 'react';

const RowContext = createContext();


export function RowContextProvider({children}){

    const [isLoading, setIsLoading] = useState(true);
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

    const [volume, setVolume] = useState(1);
    // const [sectionTitle, setSectionTitle] = useState('')
    const [genreTitle, setGenreTitle] = useState('');
    const [genreID, setGenreID] = useState(null);


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
        mediaType, setMediaType,
        // sectionTitle, setSectionTitle,
        genreTitle, setGenreTitle,
        genreID, setGenreID,
        isLoading, setIsLoading
    };

    const[isHovered, setIsHovered] = useState(false);
    const [cardPopupWidth, setCardPopupWidth] = useState(''); 
    const [cardPopupHeight, setCardPopupHeight] = useState('');
    const [distance, setDistance] = useState(0);
    const [totalPostersInView, setTotalPostersInView] = useState(0);
    const [viewedPosters, setViewPosters] = useState(0);
    const [containerWidth, setContainerWidth]  = useState(0);
    const [posterIndex, setPosterIndex] = useState(0);
    const [rowPadding, setRowPadding] = useState(0);
    const [genres, setGenres] = useState([]);
    const [delayMount, setDelayMount] = useState(false);
    const [delayHandler, setDelayHandler] = useState(null);
    const [cardPopupBackdrop, setCardPopupBackdrop] = useState('');
    const [cardPopupAirDate, setCardPopupAirDate] = useState(null);
    const [cardPopupRating, setCardPopupRating] = useState(null);
    const [cardPopupTitle, setCardPopupTitle] = useState('');
    const [postersInViewTabNumber, setPostersInViewTabNumber] = useState(0);
    const [posterWidth, setPosterWidth] = useState(0);

    const popupProps = {

        setIsHovered, isHovered,
        setCardPopupWidth,setCardPopupHeight,
        distance, setDistance,
        posterIndex, setPosterIndex,
        totalPostersInView, setTotalPostersInView,
        setRowPadding, rowPadding,
        viewedPosters, setViewPosters,
        containerWidth, setContainerWidth,
        setGenres, genres,
        cardPopupWidth, cardPopupHeight,
        delayMount, setDelayMount,
        delayHandler, setDelayHandler,
        cardPopupBackdrop, setCardPopupBackdrop,
        cardPopupRating, setCardPopupRating,
        cardPopupTitle, setCardPopupTitle,
        postersInViewTabNumber, setPostersInViewTabNumber,
        cardPopupAirDate, setCardPopupAirDate,
        posterWidth, setPosterWidth
    };


    return(
        <RowContext.Provider value={{fullscreenProps, popupProps}} >
            {children}
        </RowContext.Provider>
    );
};

export default RowContext;
