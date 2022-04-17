import { Box, Button } from '@mui/material'
import React from 'react';
import './scss/StoryCardPage.scss';
import StoryCardPageHeader from './StoryCardPageHeader' 
import HeroStoryCard from './HeroStoryCard'
import {TvAsset, PhoneAsset, KidsImageAsset} from './StoryCardAssets';
import {StoryCard, AccordionQuestions, CTAEmailForm} from '../../components'

const LoginPage = ({setIsLogin}) => {
    return (
        <Box id="login-page">

            <StoryCardPageHeader setIsLogin={setIsLogin}/>

            <Box className="story-cards">
                <HeroStoryCard/>
                <StoryCard
                    title="Enjoy on your TV"
                    subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    asset = {<TvAsset/>}
                />

                <StoryCard
                    title="Download your shows to watch offline."
                    subtitle="Save your favorites easily and always have something to watch."
                    asset = {<PhoneAsset/>}
                />
                

                <StoryCard
                    title="Create profiles for kids."
                    subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                    asset = {<KidsImageAsset/>}
                />

                <StoryCard
                    title=""
                    subtitle=""
                    asset = {
                        <>
                            <AccordionQuestions/>
                            <CTAEmailForm/>
                        </>
                    }
                />

            </Box>

        </Box>
    )
}

export default LoginPage
