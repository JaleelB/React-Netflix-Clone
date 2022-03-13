import { Box } from '@mui/material';
import { PlayCircle, ThumbDownOffAlt, ThumbUpOffAlt, AddCircleOutline, ExpandCircleDown } from '@mui/icons-material';
import React from 'react';

import './PosterPreviewPopup.scss';

const PosterPreviewPopup = ({ popupProps}) => {

    const { cardPopupWidth, cardPopupHeight, genres, rowPadding, posterIndex, setIsHovered, totalPostersInView } = popupProps;
    console.log(`${(cardPopupWidth * posterIndex) + rowPadding + (8 * posterIndex)}px`);

    return (
        <Box 
            className="preview-popup" 
            sx={{
                width: `${cardPopupWidth * 1.5}px`,
                height: `${cardPopupHeight * 1.3}px`,
                top: -10,
                // left: '0px'
                left: `${((cardPopupWidth * (posterIndex > totalPostersInView ? posterIndex - (totalPostersInView + 1) : posterIndex)) + rowPadding + (8 * posterIndex)) - rowPadding}px`
            }}
            onMouseLeave={()=> {
                    console.log('mouse left')
                    setIsHovered(false)
            }}
        >  
            <Box className="media-poster-info-popup">

                <Box className="media-poster-trailer-player"></Box>

                <Box className="media-poster-info">
                    <Box className="button-controls-container">
                        <PlayCircle className="popup-icon"/>
                        <AddCircleOutline className="popup-icon"/>
                        <ThumbUpOffAlt className="popup-icon"/>
                        <ThumbDownOffAlt className="popup-icon"/>
                        <ExpandCircleDown className="popup-icon details-button"/>
                    </Box>
                    <Box className="genre-list">
                        <ul>
                            {
                                genres.map((genre, index)=>{
                                    return <li key={index} className="genre">
                                                {index  > 0 ? <span className="separator"></span> : ''}
                                                {genre}
                                            </li>
                                })
                            }
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PosterPreviewPopup;
