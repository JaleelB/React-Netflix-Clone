import { Box } from '@mui/material'
import React, { useContext} from 'react';
import { PosterGallery, Footer, FullscreenPlayer,FullscreenPopup, SkeletonLoader } from '../../components';
import './SavedMovies.scss';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import useFetchApi from '../../hooks/useFetchAPi';

const SavedMovies = () => {

    const {user} = useContext(AuthenticationContext);
    const {apiData} = useFetchApi(`/users/getAllMovies/${user.details._id}`);

    const fullscreenProps = useFullscreenPropsContext();
    const { 
        fullscreenPlayer, openFullscreenPopup,
        disablePointer
    } = fullscreenProps.fullscreenProps;

    
    return (
        <Box id="saved-page">
            
            <Box className="inner">
                <h1 className={`title ${disablePointer ? 'disable-pointer' : ''}`}>My List</h1>

                <PosterGallery
                    medias={apiData} 
                    className = {`poster-gallery ${disablePointer ? 'disable-pointer' : ''}`} 
                />

                { fullscreenPlayer && <FullscreenPlayer/> }
                {openFullscreenPopup && <FullscreenPopup/>} 

                <Footer/>

            </Box> 


        </Box>
    )
}

export default SavedMovies;
