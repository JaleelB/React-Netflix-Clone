import { Box } from '@mui/material';
import React, { useState, useRef } from 'react';
import {MediaRowWrapper, MediaRowTitle, PosterPreviewPopup, PaginationIndicator } from '../../components';
import './MediaRow.scss';
import {useRowPopupPropsContext, RowPropsProvider} from '../../RowPropsContext';

const MediaRowContainer = ({title, medias, netflixOriginal, typeMedia, className,disableHover}) => {

    // const rowRef = useRef(null);
    // const [rowTabIndex, setRowTabIndex] = useState(0);
    // const [postersInView, setPostersInView] = useState(0);
    
    
    const props = useRowPopupPropsContext();
    const {setIsHovered, delayMount} = props.rowPopupProps;
    
    return (
        <RowPropsProvider>
            <Box 
                className="media-container"
                onMouseLeave={()=> setIsHovered(false)}
                // ref={rowRef}
            >

                <MediaRowTitle title={title ? title : ''}/>
                <PaginationIndicator 
                    posterNum={medias.length} 
                    // rowTabIndex={rowTabIndex} 
                    // postersInView={postersInView}
                />
                {medias &&  <MediaRowWrapper 
                                medias={medias}   
                                netflixOriginal={netflixOriginal}
                                // rowRef={rowRef}
                                typeMedia={typeMedia}
                                className={className}
                                disableHover={disableHover}
                                // rowTabIndex={rowTabIndex}
                                // setRowTabIndex={setRowTabIndex}
                                // setPostersInView={setPostersInView}
                            /> 
                }
                

                { !disableHover && delayMount && window.innerWidth > 1200 && 
                    
                        <PosterPreviewPopup 
                            // popupProps = {popupProps}
                            // fullscreenProps = {fullscreenProps}
                        />
                }
   
            </Box> 
        </RowPropsProvider>
    )
    
}

export default MediaRowContainer;
