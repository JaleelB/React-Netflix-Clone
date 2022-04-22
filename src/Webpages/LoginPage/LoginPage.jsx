import { Box,Link,Button } from '@mui/material';
import React, {useState, useRef} from 'react';
import LoginHeader from './LoginHeader';
import {Footer} from '../../components';
import './scss/LoginPage.scss';

const LoginPage = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = () => {
        if(emailRef.current.value !== "" && passwordRef.current.value !== ""){
            setPassword(passwordRef.current.value);
            setEmail(emailRef.current.value);
        }
    };

    

    return (
        <Box id="login-page">
            <LoginHeader/>
            <Box className="background-image-wrapper">
                <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
                <Box className="concord-img-gradient"></Box>
            </Box>

            <Box className="login-body-wrapper">
                <form className="login-body">

                    <Box className="login-body-main">
                        <h1 className="login-title">Sign In</h1>
                        <Box className="email-form">
                            <input 
                                id="email-input" 
                                type="text" 
                                plassholder="Email or phone number"
                                ref={emailRef}
                            />
                            <span className="input-validate">
                                Please enter a valid email or phone number.
                            </span>
                        </Box>

                        <Box className="password-form" >
                            <input 
                                id="password-input" 
                                type="password" 
                                placeholder="Password"
                                ref={passwordRef}
                            />
                            <span className="input-validate">
                                Your password must contain between 7 and 60 characters.
                            </span>
                        </Box>

                        <Button className="login-button" onClick={handleLogin}>Sign In</Button>

                        <Box className="remember-user-checkbox">
                            <input type="checkbox" id="remember-user" name="checkbox1"/>
                            <label htmlFor="remember-user">Remember me</label>
                        </Box>

                        <Box className="regsiter-text">
                            <span>New To Netflix?</span>
                            <Link>Sign up now.</Link>
                        </Box>

                        <Box className="captcha-text">
                            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            <Link>Learn more.</Link>
                        </Box>
                    </Box>

                </form>
            </Box>
            <Footer/>
        </Box>
    )
}

export default LoginPage;
