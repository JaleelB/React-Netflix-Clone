import React, {useState, useContext, createContext, useRef} from 'react';

const RowPropsContext = createContext();

export function useRowPopupPropsContext(){
    return useContext(RowPropsContext);
};

export function RowPropsProvider({children}){

    
    const [isHovered, setIsHovered] = useState(false);

    const [genres, setGenres] = useState([]);
    const [delayMount, setDelayMount] = useState(false);
    const [delayHandler, setDelayHandler] = useState(null);

    const [cardPopupWidth, setCardPopupWidth] = useState(''); 
    const [cardPopupHeight, setCardPopupHeight] = useState('');
    const [cardPopupBackdrop, setCardPopupBackdrop] = useState('');
    const [cardPopupAirDate, setCardPopupAirDate] = useState(null);
    const [cardPopupRating, setCardPopupRating] = useState(null);
    const [cardPopupTitle, setCardPopupTitle] = useState('');
    const [posterIndex, setPosterIndex] = useState(0);

    const rowRef = useRef(null);
    const [rowTabIndex, setRowTabIndex] = useState(0);
    const [postersInView, setPostersInView] = useState(0);
    const [totalRowTabs, setTotalRowTabs] = useState(0);


    const slideRowLeft = () => {
        if(rowTabIndex > 0) setRowTabIndex(prevRowTabIndex => prevRowTabIndex - 1)
        else if(rowTabIndex === 0) setRowTabIndex(totalRowTabs - 1);
    };
    const slideRowRight = () => {
        if(rowTabIndex < (totalRowTabs - 1)) setRowTabIndex(prevRowTabIndex => prevRowTabIndex + 1);
        else if(rowTabIndex === (totalRowTabs - 1)) setRowTabIndex(0);
    };
    

    // const showPrevButton = rowTabIndex > 0;

    const rowPopupProps = {

        setIsHovered, isHovered,
        setCardPopupWidth,setCardPopupHeight,
        setGenres, genres,
        cardPopupWidth, cardPopupHeight,
        delayMount, setDelayMount,
        delayHandler, setDelayHandler,
        cardPopupBackdrop, setCardPopupBackdrop,
        cardPopupRating, setCardPopupRating,
        cardPopupTitle, setCardPopupTitle,
        // postersInViewTabNumber, setPostersInViewTabNumber,
        cardPopupAirDate, setCardPopupAirDate,
        posterIndex, setPosterIndex,
        slideRowLeft, slideRowRight,
        rowTabIndex, setRowTabIndex, rowRef,
        postersInView, setPostersInView,
        totalRowTabs, setTotalRowTabs
    };

    //create another context for fullscreen props

    return(
        <RowPropsContext.Provider value={{rowPopupProps}} >
            {children}
        </RowPropsContext.Provider>
    );
};


