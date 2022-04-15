import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import {MediaRowWrapper, MediaRowTitle, PosterPreviewPopup, PaginationIndicator } from '../../components';
import './MediaRow.scss';
import {useRowPopupPropsContext, RowPropsProvider} from '../../RowPropsContext';

const MediaRowContainer = ({title, medias, netflixOriginal, typeMedia, className,disableHover}) => {

    // const rowRef = useRef(null);
    // const [rowTabIndex, setRowTabIndex] = useState(0);
    // const [postersInView, setPostersInView] = useState(0);
    
    
    // const props = useRowPopupPropsContext();
    // const {setIsHovered, delayMount} = props.rowPopupProps;


    return (
        <RowPropsProvider>
            <Box 
                className="media-container"
                // onMouseEnter={()=> setIsHovered(true)}
                // onMouseLeave={()=> setIsHovered(false)}
                // ref={rowRef}
            >

                <MediaRowTitle title={title ? title : ''}/>
                <PaginationIndicator 
                    posterNum={medias.length} 
                />
                {medias &&  <MediaRowWrapper 
                                medias={medias}   
                                netflixOriginal={netflixOriginal}
                                typeMedia={typeMedia}
                                className={className}
                                disableHover={disableHover}

                            /> 
                }
                

                {/* { !disableHover && delayMount && window.innerWidth > 1200 && 
                    
                        <PosterPreviewPopup 
                            // popupProps = {popupProps}
                            // fullscreenProps = {fullscreenProps}
                        />
                } */}
   
            </Box> 
        </RowPropsProvider>
    )
    
}

export default MediaRowContainer;
