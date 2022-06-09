import { Box,Button } from '@mui/material';
import React, {useState, useRef, useContext} from 'react';
import LoginHeader from './LoginHeader';
import {Footer} from '../../components';
import './scss/LoginPage.scss';
import axios from "axios";
import {AuthenticationContext} from '../../authenticationContext/AuthenticateContext';
import { Link } from "react-router-dom";

const LoginPage = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [isEmptyField, setIsEmptyField] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {dispatch, stayLoggedIn, setStayLoggedIn } = useContext(AuthenticationContext);

    // const updateDebounceText = debounceInput(text=>{
    //     if(emailRef.current.value !== "") setEmail(text);
    //     else if(passwordRef.current.value !== "") setPassword(text);
    // }, 1000);
   
    // function debounceInput(callback, delay=1000){
    //     let timeout;
    //     return(...args) => {
    //         clearTimeout(timeout);
    //         timeout = setTimeout (() => {
    //             callback(...args)
    //         }, delay)
    //     }
    // };

    const handleLogin = async(e) => {
        e.preventDefault();

        if((emailRef.current.value === "" && passwordRef.current.value === "") || (emailRef.current.value === "" || passwordRef.current.value === "")){
            setIsEmptyField(true);
            return;
        }

        if(isEmptyField) setIsEmptyField(false);

        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);

        // login({email, password}, dispatch)
        dispatch({ type: "LOGIN_START" });
        try{
            const response = await axios.post('/userAuthentication/login', {email, password});
            dispatch({type: "LOGIN_SUCCESS", payload: response.data});
            
        }catch(error){
            setErrorMessage(error.message);
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data })
        }
        
    };

    

    return (
        <Box 
            id="login-page"
        >
            <LoginHeader/>
            <Box className="background-image-wrapper">
                <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/03df0fe8-6cdd-40cd-a947-e7cd96bc6ad3/US-en-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""/>
                <Box className="concord-img-gradient"></Box>
            </Box>

            <Box className="login-body-wrapper">
                <form className="login-body">

                    <Box className="login-body-main">
                        <h1 className="login-title">Sign In</h1>
                        
                        <Box className="error-message">
                            { 
                                isEmptyField && 
                                <Box className="empty-field-validate">
                                    <b className="bold-message">You cannot leave a field empty.</b> 
                                    &nbsp;Please fill out all available fields then submit.
                                </Box>
                            }
                            {
                                errorMessage && 
                                <Box className="error-message-wrapper">
                                    {errorMessage}
                                </Box>
                            }
                        </Box>

                        <Box className="email-form">
                            <input 
                                id="email-input" 
                                type="text" 
                                placeholder="Email Address"
                                onClick = { (event) => event.preventDefault() }
                                ref={emailRef}
                                onChange = { (e)=> {
                                    setEmail(emailRef.current.value);
                                    setPassword(passwordRef.current.value);
                                }}
                            />
                            <span className="input-validate">
                                Please enter a valid email.
                            </span>
                        </Box>

                        <Box className="password-form" >
                            <input 
                                id="password-input" 
                                type="password" 
                                placeholder="Password"
                                onClick = { (event) => event.preventDefault() }
                                ref={passwordRef}
                                onChange = { (e)=> {
                                    setPassword(passwordRef.current.value);
                                }}
                            />
                            <span className="input-validate">
                                Your password must contain between 7 and 60 characters.
                            </span>
                        </Box>

                        <Button className="login-button" onClick={handleLogin}>Sign In</Button>

                        <Box className="remember-user-checkbox">
                            <input 
                                type="checkbox" 
                                id="remember-user" 
                                name="checkbox1"
                                checked={stayLoggedIn}
                                onChange={()=> {
                                    setStayLoggedIn(!stayLoggedIn);
                                }}
                            />
                            <label htmlFor="remember-user">Remember me</label>
                        </Box>

                        <Box className="regsiter-text">
                            <span>New To Netflix?</span>
                            <Link to='/register'>Sign up now.</Link>
                        </Box>

                        <Box className="captcha-text">
                            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            {/* <a href="/">Learn more.</a> */}
                        </Box>
                    </Box>

                </form>
            </Box>
            <Footer/>
        </Box>
    )
}

export default LoginPage;
