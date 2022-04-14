import React, {useState, useContext, createContext} from 'react';

const FullscreenPropsContext = createContext();

export function useFullscreenPropsContext(){
    return useContext(FullscreenPropsContext)
};

export function FullscreenPropsProvider({children}){
    //skeelton loading state
    const [isLoading, setIsLoading] = useState(true);

    //props for fullscreen video player and fullscreen modal popup
    const [fullscreenPlayer, setFullscreenPlayer] = useState(false);
    const [openFullscreenPopup, setOpenFullscreenPopup] = useState(false);
    const [fullVideoPath, setFullVideoPath] = useState('');

    //props 
    const [posterID, setPosterID] = useState(0); //change to movie id
    const [netflixOriginalShow, setNetflixOriginalShow] = useState(false);

    
    const [movie, setMovie] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [similiarMovies, setSimiliarMovies] = useState([]);
    const [disablePointer, setDisablePointer] = useState(false);
    const [mediaType, setMediaType] = useState('');

    const [volume, setVolume] = useState(1);
    // const [sectionTitle, setSectionTitle] = useState('')
    const [genreTitle, setGenreTitle] = useState('');
    const [genreID, setGenreID] = useState(null);

    const loading = () => setIsLoading(true);
    const updateLoading = () => setIsLoading(false);
    const handleFullscreenModal = () => setOpenFullscreenPopup(prevOpenFullscreenPopup => !prevOpenFullscreenPopup);
 



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
        genreID, setGenreID, isLoading, 

        // functions
        updateLoading, handleFullscreenModal, loading
    };

    return (
        <FullscreenPropsContext.Provider value={{fullscreenProps}}>
            {children}
        </FullscreenPropsContext.Provider>
    );

};