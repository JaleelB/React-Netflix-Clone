import { Box } from '@mui/material';
import React, { useState, useRef } from 'react';
import {MediaRowWrapper, MediaRowTitle, PosterPreviewPopup } from '../../components';
import './MediaRow.scss';
import {useRowPopupPropsContext} from '../../RowPropsContext';

const MediaRowContainer = ({title, medias, netflixOriginal, typeMedia, className,disableHover}) => {

    const rowRef = useRef(null);

    
    const rowPopupProps = useRowPopupPropsContext();
    const {setIsHovered, delayMount} = rowPopupProps.rowPopupProps;
    
    return (

            <Box 
                className="media-container"
                onMouseLeave={()=> setIsHovered(false)}
                ref={rowRef}
            >

                <MediaRowTitle title={title ? title : ''}/>
                {medias &&  <MediaRowWrapper 
                                medias={medias}   
                                netflixOriginal={netflixOriginal}
                                rowRef={rowRef}
                                typeMedia={typeMedia}
                                className={className}
                                disableHover={disableHover}
                            /> 
                }
                

                { !disableHover && delayMount && window.innerWidth > 1200 && 
                    
                        <PosterPreviewPopup 
                            // popupProps = {popupProps}
                            // fullscreenProps = {fullscreenProps}
                        />
                }

                
            </Box> 

    )
    
}

export default MediaRowContainer;
