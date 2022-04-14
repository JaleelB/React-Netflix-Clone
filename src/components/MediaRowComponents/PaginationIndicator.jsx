import { Box } from '@mui/material';
import React, {useRef, useEffect} from 'react';
import PaginationIndicatorBar from './PaginationIndicatorBar';
import '../../containers/MediaRow/MediaRow.scss';
import {useRowPopupPropsContext} from '../../RowPropsContext';


const PaginationIndicator = ({posterNum}) => {

    const props = useRowPopupPropsContext();
    const {rowTabIndex, postersInView, setTotalRowTabs} = props.rowPopupProps;

    
    const paginationIndicator = useRef(null);
    const posterCount = posterNum;
    const numOfPaginationBars =  postersInView && Math.round(posterCount / postersInView);

    const numOfPaginationBarsArray =  [...Array(numOfPaginationBars).keys()].map(x => ++x);

    useEffect(() => {
        setTotalRowTabs(numOfPaginationBars)
    }, [numOfPaginationBars])


    return (
        <Box 
            className="pagination-indicator" 
            ref={paginationIndicator}
        >
            <ul>
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
