import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import './ErrorPage.scss';

const ErrorPage = () => {
    return (
        <Box
            id="error-page"
        >
            <Box className="error-container">
                <h1 className="error-card-title">Lost Your Way?</h1>
                <h2 className="error-card-subtitle">Sorry, we can't find that page. You'll find loads to explore on the homepage.</h2>

                <Button className="home-btn">
                    <Link 
                        to={'/'}
                    >

                        <ChevronLeftIcon className="arrow"/>
                        <span>Back To Home</span>
                        
                    </Link>
                </Button>

                <Box className="error-code-message">
                    <span className="error-code-title">&nbsp;&nbsp;&nbsp;Error Code</span>
                    <span className="error-code">NSES-404</span>
                </Box>
                
                
            </Box>
            
        </Box>
    )
}

export default ErrorPage
