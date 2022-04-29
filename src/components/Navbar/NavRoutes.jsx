import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from '../../Webpages/Hero/Hero';
import Movies from '../../Webpages/Movies/Movies';
import TvShows from '../../Webpages/TvShows/TvShows';
import Search from '../../Webpages/Search/Search';
import RegisterPage from '../../Webpages/Register/RegisterPage.jsx'
import LoginPage from '../../Webpages/LoginPage/LoginPage';
// import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import ErrorPage from '../../Webpages/ErrorPage/ErrorPage';

const NavRoutes = ({user}) => {

    return (
    
        <Routes>
            <Route path='/' exact element={ user ? <Hero/> : <Navigate replace to="/register"/>} />
            <Route path='/register' element={ !user ? <RegisterPage/> : <Navigate replace to="/"/>} />
            <Route path='/login' element={!user ? <LoginPage/> : <Navigate replace to="/"/>} />
            {
                user && (
                    <>
                        <Route path='/Search/:genrePath' element={<Search/>} />
                        <Route path='/Movies/:genrePath' element={<Movies/>} />
                        <Route path='/TvShows/:genrePath' element={<TvShows/>} />
                    </>
                )
            }
            
            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}

export default NavRoutes;