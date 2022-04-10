import { useState, useRef, useEffect } from 'react';

const useRowSliding = ({posterWidth, posterRowWrapperRef, numOfPosters}) => {

    const posterRowContainerRef = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [distance, setDistance] = useState(0);
    const [totalPostersInView, setTotalPostersInView] = useState(0)
    const [viewedPosters, setViewedPosters] = useState(0);
    const [rowPadding, setRowPadding] = useState(0);

    // console.log(posterRowContainerRef.current, posterRowWrapperRef.current, posterWidth)

    useEffect(()=>{
        const rowPadding = window.getComputedStyle(posterRowContainerRef.current).getPropertyValue('padding-left');
        const rowPaddingValue = Number(rowPadding.substring(0, rowPadding.length - 3));
        const rowContainerWidth = posterRowWrapperRef.current.clientWidth - (rowPaddingValue * 2);

        setContainerWidth(rowContainerWidth);
        setRowPadding(rowPaddingValue);
        setTotalPostersInView(Math.floor(rowContainerWidth / posterWidth));

    // },[posterRowContainerRef.current, posterRowWrapperRef.current, posterWidth]); 
    },[posterRowContainerRef.current, posterRowWrapperRef.current, posterWidth]); 

    const slidePrev = () => {
        setViewedPosters(viewedPosters - totalPostersInView);
        setDistance(distance + containerWidth);
    }

    const slideNext = () => {
        setViewedPosters(viewedPosters + totalPostersInView);
        setDistance(distance - containerWidth)
    }


    const showPrevButton = distance < 0;
    const showNextButton = (viewedPosters + totalPostersInView) < numOfPosters;

    return { slidePrev, slideNext, posterRowContainerRef, showPrevButton, showNextButton, rowPadding };
}

export default useRowSliding;
