import { Box } from '@mui/material';
import React from 'react';
import './scss/StoryCardAssets.scss';

export const TvAsset = () => {
    return (
        <Box className="our-story-card-img-container">
            <Box className="our-story-card-animation-container">
                <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
                    
                <Box className="our-story-card-animation">
                    <video className="our-story-card-video" autoPlay={true} playsInline="" muted="" loop="">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                    </video>
                    <Box className="our-story-card-animation-text"></Box>
                </Box>
            </Box>
        </Box>
    )
}



export const PhoneAsset = () => {
    return(
            <Box className="our-story-card-img-container">
                <Box className="our-story-card-animation-container">
                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img"/>
                    <Box className="our-story-card-animation"></Box>
                </Box>
            </Box>
    );
}

export const KidsImageAsset = () =>{
    return(
        <Box className="our-story-card-img-container">
            <Box className="our-story-card-animation-container">
                <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" data-uia="our-story-card-img"/>
            </Box>
        </Box>
    );
}

