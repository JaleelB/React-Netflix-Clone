import { Box } from '@mui/material';
import React from 'react';
import {CTAEmailForm} from '../../components';
import './scss/HeroStoryCard.scss'

const HeroStoryCard = () => {
    return (
        <Box className="hero-story-card story-card">

            <Box className="background-image-wrapper">
                <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
                <Box className="concord-img-gradient"></Box>
            </Box>

            <Box className="hero-story-card-text">
                <h1 className="hero-story-card-title">Unlimited movies, TV shows, and more.</h1>
                <h2 className="hero-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
                <CTAEmailForm/>
            </Box>

        </Box>
    )
}

export default HeroStoryCard
