import { ChevronRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, {useState, useRef, useEffect} from 'react';
import './CTAEmailForm.scss'

const CTAEmailForm = () => {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const inputFormRef = useRef(null);

    const handleSubmit = () =>{
        if(inputFormRef.current.value !== "" && emailAddress === ""){
            setEmailAddress(inputFormRef.current.value)
            inputFormRef.current.value = "";
        }
        else if(inputFormRef.current.value !== "" && emailAddress !== "" && password === ""){
            setPassword(inputFormRef.current.value)
        }
    }


    return (
        <Box className="cta-form-container">

            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className="form-input-wrapper">
                <input
                    className="input" 
                    ref={inputFormRef}
                    type={!emailAddress ? "text" : "password"}
                    placeholder={!emailAddress ? "Email Address" : "Password"}
                />
                <label className="floating-label">{!emailAddress ? "Email Address" : "Password"}</label>

                <Button className="get-started-btn btn" onClick={handleSubmit}>
                    <span>{!emailAddress ? "Submit Email" : "Get Started"}</span>
                    <ChevronRight className="arrow"  />
                </Button>

            </form>
    
        </Box>
    )
}

export default CTAEmailForm
