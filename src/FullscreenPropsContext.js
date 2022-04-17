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

    const loading = () => setIsLoading(true);
    const updateLoading = () => setIsLoading(false);
    const updatePosterId = (id) => setPosterID(id);
    const handleNetflixOriginal = (netflixOriginal,typeMedia) =>{
        if(netflixOriginal && typeMedia === 'tv') setNetflixOriginalShow(true);
        else if(netflixOriginal && typeMedia === 'movie') setNetflixOriginalShow(false);
    };

    const handleMediaType = (typeMedia) =>{ if (typeMedia) setMediaType(typeMedia); };

    const numberOfWords = (string) => { return string.split(" ").length; }
      
    const truncate = (string, numOfWords) => { return string.split(" ").splice(0, numOfWords).join(" ") + "..."; }
    


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
        isLoading, truncate,
        updateLoading, numberOfWords,
        loading, setIsLoading,
        handleNetflixOriginal, updatePosterId, handleMediaType
    };

    return (
        <FullscreenPropsContext.Provider value={{fullscreenProps}}>
            {children}
        </FullscreenPropsContext.Provider>
    );

};