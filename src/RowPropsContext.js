import React, {useState, useContext, createContext, useEffect} from 'react';

const RowPropsContext = createContext();

export function useRowPopupPropsContext(){
    return useContext(RowPropsContext);
};

export function RowPropsProvider({children}){

    
    const [isHovered, setIsHovered] = useState(false);

    // const [distance, setDistance] = useState(0);
    // const [totalPostersInView, setTotalPostersInView] = useState(0);
    // const [viewedPosters, setViewedPosters] = useState(0);
    // const [postersInViewTabNumber, setPostersInViewTabNumber] = useState(0);
    // const [containerWidth, setContainerWidth]  = useState(0);
    // const [posterIndex, setPosterIndex] = useState(0);
    // const [rowPadding, setRowPadding] = useState(0);

    const [genres, setGenres] = useState([]);
    const [delayMount, setDelayMount] = useState(false);
    const [delayHandler, setDelayHandler] = useState(null);

    const [cardPopupWidth, setCardPopupWidth] = useState(''); 
    const [cardPopupHeight, setCardPopupHeight] = useState('');
    const [cardPopupBackdrop, setCardPopupBackdrop] = useState('');
    const [cardPopupAirDate, setCardPopupAirDate] = useState(null);
    const [cardPopupRating, setCardPopupRating] = useState(null);
    const [cardPopupTitle, setCardPopupTitle] = useState('');
    // const [rowTabIndex, setRowTabIndex] = useState(0);

    

    const slideRowLeft = (setIndex) => setIndex(prevIndex => prevIndex - 1);
    const slideRowRight = (setIndex) => setIndex(prevIndex => prevIndex + 1);
    

    // const showPrevButton = rowTabIndex > 0;

    const rowPopupProps = {

        setIsHovered, isHovered,
        setCardPopupWidth,setCardPopupHeight,
        // distance, setDistance,
        // posterIndex, setPosterIndex,
        // totalPostersInView, setTotalPostersInView,
        // setRowPadding, rowPadding,
        // viewedPosters, setViewPosters,
        // containerWidth, setContainerWidth,
        setGenres, genres,
        cardPopupWidth, cardPopupHeight,
        delayMount, setDelayMount,
        delayHandler, setDelayHandler,
        cardPopupBackdrop, setCardPopupBackdrop,
        cardPopupRating, setCardPopupRating,
        cardPopupTitle, setCardPopupTitle,
        // postersInViewTabNumber, setPostersInViewTabNumber,
        cardPopupAirDate, setCardPopupAirDate,
        // rowTabIndex, 
        slideRowLeft, slideRowRight
    };

    //create another context for fullscreen props

    return(
        <RowPropsContext.Provider value={{rowPopupProps}} >
            {children}
        </RowPropsContext.Provider>
    );
};


