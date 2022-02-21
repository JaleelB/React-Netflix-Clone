import React from 'react';
import { Box,Typography } from "@mui/material";
import './MoodSelection.scss';

const moodCategories = ['Love, Family & Laughter','Fantasy','Discovery & Exploration', 'Drama', 'Thriller & Suspense'];

const MoodSelection = ({screenState,removeScreen,setMoodCategory}) => {
    return (
        <Box className={`mood-screen ${screenState ? 'remove-mood-screen' : ''}`}>
            
            <Box className="mood-wrapper">

                <Box className="categories-textheader">
                    <Typography variant="h4" component="h1" sx={{color: '#fff'}}>What's your mood today?</Typography>
                </Box>
                <Box className="mood-categories-wrapper">
                    {
                        moodCategories.map((userMood,index) => {
                            return(
                                
                                <Box 
                                    className="category-wrapper" 
                                    id={userMood} 
                                    key={index}
                                    sx={{width: '10vw'}}
                                    onClick = {() => { 
                                        setMoodCategory(userMood); 
                                        // setMediaCategories(userMood); 
                                    }}
                                >
                                    <Box 
                                        className="category-icon"
                                        onClick = {()=>{removeScreen(true)}}
                                    >
                                    </Box>

                                    <Box className="category-title">
                                        <Typography className="icon-title" variant="subtitle1" component="h4">{userMood}</Typography>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>

            </Box>
        </Box>
    );
}

export default MoodSelection;
