import React, {useContext, createContext, useState, useRef, useEffect} from 'react';
import {apiComponents } from './components';
import {useRowPopupPropsContext} from './RowPropsContext';



const PosterPropsContext = createContext();

export function usePosterProps(){
    return useContext(PosterPropsContext)
}

export function PosterPropsProvider({children}){

    const posterRef = useRef(null);
    const [posterWidth, setPosterWidth] = useState(0);
    const [posterHeight, setPosterHeight] = useState(0);

    
    const rowPopupProps = useRowPopupPropsContext();
    const { delayMount, setDelayMount, setDelayHandler, delayHandler } = rowPopupProps.rowPopupProps;
    
    const usePosterSize = () => {
        useEffect(() => {
            setPosterWidth(posterRef.current.clientWidth);
            setPosterHeight(posterRef.current.clientHeight)
        }, [posterRef.current]);

        return { posterHeight, posterWidth, posterRef };
    };


    const handleDelayOnMount = () => {

        if(delayMount) setDelayMount(false);  
       
        setDelayHandler(setTimeout(() => {
            setDelayMount(true);
        }, 700))

    };

    const handleUnmountDelay = () => clearTimeout(delayHandler);

    const getGenres = (genreIDs) => {

        const genres = [];

        for(let genreItem in genreIDs){
            for(let i=0; i<apiComponents[3].length; i++){
                if(genreIDs[genreItem] in apiComponents[3][i]) genres.push(apiComponents[3][i][`${genreIDs[genreItem]}`])
            }
        }

        return genres;
    };

    const posterProps = {
        posterRef, usePosterSize,
        handleDelayOnMount, handleUnmountDelay,
        getGenres
    }


    return (
        <PosterPropsContext.Provider value={posterProps}>
            {children}
        </PosterPropsContext.Provider>
    );
}

export default PosterPropsContext;