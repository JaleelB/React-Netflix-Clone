import { useState, useRef, useEffect } from 'react';

const useRowSliding = ({posterWidth, rowRef, numOfPosters}) => {

    const posterRowRef = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [distance, setDistance] = useState(0);
    const [totalPostersInView, setTotalPostersInView] = useState(0)
    const [viewedPosters, setViewedPosters] = useState(0);
    const [rowPadding, setRowPadding] = useState(0);

    // console.log(posterRowContainerRef.current, posterRowWrapperRef.current, posterWidth)

    useEffect(()=>{
        const rowPadding = window.getComputedStyle(posterRowRef.current).getPropertyValue('padding-left');
        const rowPaddingValue = Number(rowPadding.substring(0, rowPadding.length - 3));
        const rowContainerWidth = window.innerWidth - (rowPaddingValue * 2);

        setContainerWidth(rowContainerWidth);
        setRowPadding(rowPaddingValue);
        setTotalPostersInView(Math.floor(rowContainerWidth / posterWidth));

    // },[posterRowContainerRef.current, posterRowWrapperRef.current, posterWidth]); 
    },[posterRowRef.current, rowRef, posterWidth]); 

    const slideRowLeft = () => {
        setViewedPosters(viewedPosters - totalPostersInView);
        setDistance(distance + containerWidth);
    }

    const slideRowRight = () => {
        setViewedPosters(viewedPosters + totalPostersInView);
        setDistance(distance - containerWidth)
    }


    const showPrevButton = distance < 0;
    const showNextButton = (viewedPosters + totalPostersInView) < numOfPosters;

    return { slideRowLeft, slideRowRight, posterRowRef, showPrevButton, showNextButton, distance };
}

export default useRowSliding;
