import { ChevronRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import './CTAEmailForm.scss'

const CTAEmailForm = () => {
    return (
        <Box className="cta-form-container">

            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
            <Box className="form-input-wrapper">
                <input
                    className="email-input" 
                    type="text"
                    placeholder="Email Address"
                />

                <Button className="get-started-btn btn">
                    <span>Get Started</span>
                    <ChevronRight className="arrow"/>
                </Button>

            </Box>
    
        </Box>
    )
}

export default CTAEmailForm
