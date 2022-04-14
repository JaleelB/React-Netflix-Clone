import { Box } from '@mui/material';
import React, {useRef} from 'react';
import PaginationIndicatorBar from './PaginationIndicatorBar';
import '../../containers/MediaRow/MediaRow.scss';



const PaginationIndicator = ({posterNum, rowRef, rowTabIndex, postersInView}) => {

    
    const paginationIndicator = useRef(null);
    const posterCount = posterNum;
    const numOfPaginationBars =  postersInView && Math.round(posterCount / postersInView);

    // console.log(numOfPaginationBars,postersInView,posterCount)
    
    const numOfPaginationBarsArray =  [...Array(numOfPaginationBars).keys()].map(x => ++x);
    // console.log(numOfPaginationBarsArray)

    return (
        <Box className="pagination-indicator" ref={paginationIndicator}>
            <ul>
                {/* <PaginationIndicatorBar className="active"/>
                <PaginationIndicatorBar/>
                <PaginationIndicatorBar/>
                <PaginationIndicatorBar/> */}
                {numOfPaginationBars && 
                    numOfPaginationBarsArray.map((bar)=>{
                        if((bar - 1) === rowTabIndex) return <PaginationIndicatorBar className="active"/>
                        else return <PaginationIndicatorBar/>
                    })
                }
            </ul>
        </Box>
    )
};

export default PaginationIndicator;
