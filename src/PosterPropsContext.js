import React, {useContext, createContext, useState, useRef, useEffect} from 'react';

const PosterPropsContext = createContext();

export function usePosterProps(){
    return useContext(PosterPropsContext)
}

export function PosterPropsProvider({children}){

    const posterRef = useRef(null);
    const [posterWidth, setPosterWidth] = useState(0);
    const [posterHeight, setPosterHeight] = useState(0);

    

    const usePosterSize = () => {
        useEffect(() => {
            setPosterWidth(posterWidth.current.clientWidth);
            setPosterHeight(posterWidth.current.clientHeight)
        }, [posterRef.current]);

        return { posterHeight, posterWidth, posterRef };
    };

    const posterProps = {
        posterRef, posterWidth, posterHeight, usePosterSize
    }


    return (
        <PosterPropsContext.Provider value={posterProps}>
            {children}
        </PosterPropsContext.Provider>
    );
}

export default PosterPropsContext;