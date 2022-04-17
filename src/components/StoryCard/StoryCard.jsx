import { Box } from '@mui/material'
import React from 'react';
import './StoryCard.scss';

const StoryCard = ({title, subtitle, asset}) => {
    return (
        
        <Box className="our-story-card story-card">
            <Box className="card-container">
                {title && subtitle && 
                    <Box className="story-card-text">
                        <h1 className="title">{title}</h1>
                        <h2 className="subtitle">{subtitle}</h2>
                    </Box>
                }
                
                <Box className="story-card-asset">
                    {asset}
                </Box>
            </Box>
        </Box>
    )
}

export default StoryCard;
