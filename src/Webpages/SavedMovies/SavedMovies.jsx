import { Box } from '@mui/material'
import React, {useEffect, useState, useContext} from 'react';
import { PosterGallery, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import './SavedMovies.scss';
// import axios from "axios";
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import useFetchApi from '../../hooks/useFetchAPi';

const SavedMovies = () => {

    const {user} = useContext(AuthenticationContext);
    const {apiData, error} = useFetchApi(`/users/getAllMovies/${user.details._id}`);
    const fullscreenProps = useFullscreenPropsContext();
    const { 
        fullscreenPlayer, openFullscreenPopup, 
        isLoading, updateLoading, disablePointer
    } = fullscreenProps.fullscreenProps;

    useEffect(() => {
        
        const timer = setTimeout(() => {
            updateLoading();
        }, 2000);

        return () => clearTimeout(timer);

    },[isLoading])

    return (
        <Box id="saved-page">
            {
                isLoading ?

                <SkeletonLoader/>

                :
                <Box className="inner">
                    <h1 className={`title ${disablePointer ? 'disable-pointer' : ''}`}>My List</h1>

                    <PosterGallery
                        medias={apiData} 
                        // title={"Tv Search Results"} 
                        className = {`poster-gallery ${disablePointer ? 'disable-pointer' : ''}`}  
                        // mediaType={"tv"}
                    />

                    { fullscreenPlayer && <FullscreenPlayer/> }
                    {openFullscreenPopup && <FullscreenPopup/>} 

                    <Footer/>

                </Box> 

            }     

        </Box>
    )
}

export default SavedMovies;
