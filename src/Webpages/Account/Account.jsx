
import React, {useContext, useState, useEffect} from 'react';
import { Box, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Footer } from '../../components';
import useFetchApi from '../../hooks/useFetchAPi';
import axios from "axios";
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { Loading } from "../../components";
import './Account.scss';

const Account = () => {

    const navigate = useNavigate();

    const {user} = useContext(AuthenticationContext);
    const {apiData} = useFetchApi(`/users/find/${user.details._id}`);

    const [deleteProfile, setDeleteProfile] = useState({ step1: false, step2: false});
    const [isLoading, setIsLoading] = useState(null);
    const [startLoading, setStartLoading] = useState(null);

    const deleteAccount = () => {
        axios.delete(`/users/delete/${apiData._id}`)
        localStorage.removeItem("user");
        navigate('/register');
        window.location.reload(false);
    };

    useEffect(() => {
        if(deleteProfile.step2 === true){
            setStartLoading(true)
        }   
    }, [deleteProfile.step2]);

    useEffect(() => {
        if(startLoading === true){
            setIsLoading(true);
            const animationTimer = setTimeout(() => setIsLoading(false), 2000);
            const successTimer = setTimeout(() => setStartLoading(false), 10000);
            return () => {
                clearTimeout(animationTimer);
                clearTimeout(successTimer);
            }
        }
        else if(startLoading === false){
            deleteAccount();
        }
        
    }, [startLoading]);


    return(
        <Box id="account-page"> 

            <Box className="account-container">
                <Box className="title-wrapper">
                    <h1 className="title">Account</h1>
                    <Box className="memeber-since-wrapper">
                        <Box className="memeber-since-img"></Box>
                        <Box className="memeber-since-message">Memeber Since May 2022</Box>
                    </Box>
                </Box>

                <Box className="info-container">

                    <Box className="container-title">
                        <>
                            <h2 className="title">PROFILE INFORMATION</h2>
                            <button 
                                className="delete-button" 
                                disabled={deleteProfile.step1}
                                onClick={() => setDeleteProfile({...deleteProfile, step1: true})}
                            >
                                Remove Account
                            </button>
                        </>

                        {deleteProfile.step1 === true ? <Box className="delete-confirmation">
                            <h3 className="delete-message">
                                Removing an account permanently deletes all associated data 
                                relating to this account. Do you want to continue?
                            </h3>

                            <Box className="delete-cta-btns">
                                <button 
                                    className="delete-account-button cta-btn"
                                    onClick={() => setDeleteProfile({...deleteProfile, step2: true})}
                                >
                                    Remove
                                </button>

                                <button 
                                    className="cancel-delete-button cta-btn"
                                    onClick={() => setDeleteProfile({...deleteProfile, step1: false})}
                                >
                                    Cancel
                                </button>

                            </Box>

                                { startLoading && 
                                    <Box className="loading">
                                        {isLoading ? <Loading/> : 'Delete Successful'}
                                    </Box>
                                }
                            
                        </Box> : ''}
                    </Box>

                    <Box className="details-container">
                        <Box className="username-container">
                            <h2 className="text">{apiData.username}</h2>
                            <Link  onClick={() => navigate('/update-account/username')} className="link">Change Username</Link>
                        </Box>

                        <Box className="email-container">
                            <h2 className="text">{apiData.email}</h2>
                            <Link  onClick={() => navigate('/update-account/email')} className="link">Change Email</Link>
                        </Box>

                        <Box className="password-container">
                            <h2 className="text">Password: *********</h2>
                            <Link onClick={() => navigate('/update-account/password')} className="link">Change Password</Link>
                        </Box>
                    </Box>

                    
                    
                </Box>

                <Box className="info-container">

                    <Box className="container-title">
                        <h2 className="title">SUBSCRIPTION DETAILS</h2>
                    </Box>

                    <Box className="details-container">
                        <Box className="plan-container">
                            <h2 className="text">Premium ULTRA HD</h2>
                            <Link className="link">Change plan</Link>
                        </Box>

                        <Box className="dvd-container">
                            <h2 className="text">No DVD Plan</h2>
                            <Link className="link">Add DVD Plan</Link>
                        </Box>

                
                    </Box>
                    
                </Box>
                
            </Box>

            <Footer/>

        </Box>
    );

};

export default Account;