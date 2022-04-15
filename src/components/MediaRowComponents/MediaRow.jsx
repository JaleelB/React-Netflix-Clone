import { Box } from '@mui/material';
import React, {useEffect}  from 'react';
import MediaPoster from './MediaPoster';
import '../../containers/MediaRow/MediaRow.scss';
import {useRowPopupPropsContext} from '../../RowPropsContext';
import {PosterPropsProvider} from '../../PosterPropsContext';


const MediaRow = ({ medias, netflixOriginal, typeMedia, className, disableHover }) => {


    const rowPopupProps = useRowPopupPropsContext();
    const { rowTabIndex, rowRef, setPostersInView, setRowPadding } = rowPopupProps.rowPopupProps;

    useEffect(()=>{
        if(!disableHover){
            const rowPadding = window.getComputedStyle(rowRef.current).getPropertyValue("padding-left");
            setPostersInView(Math.round(Number(getComputedStyle(rowRef.current).getPropertyValue("--total-posters-in-viewport"))));
            setRowPadding(Math.round(Number(rowPadding.substring(0, rowPadding.length - 2))))
        }
        
    },[rowRef.current])


    return (

        <Box 
            className={`media-row ${className ? className: ''}`}
            ref={rowRef}
            sx={{transform: `translate3d(calc(${rowTabIndex} * -100%), 0px, 0px)`}}
        >
            {
                medias && medias.map((media, index) => {   
                    
                    return (
                        <PosterPropsProvider>
                            <MediaPoster
                                key={media.id}
                                index = {index}
                                media ={ media}
                                typeMedia={typeMedia ? typeMedia : media?.media_type}
                                disableHover={disableHover}
                                netflixOriginal={netflixOriginal}
                              
                            />
                        </PosterPropsProvider>
                    );
                                
                })   
            }
        </Box>
  
    )
}

export default MediaRow;


