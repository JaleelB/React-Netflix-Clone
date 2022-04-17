import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../../Webpages/Hero/Hero';
import Movies from '../../Webpages/Movies/Movies';
import TvShows from '../../Webpages/TvShows/TvShows';
import Search from '../../Webpages/Search/Search';
import Saved from '../../Webpages/Saved/Saved';
// import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import ErrorPage from '../../Webpages/ErrorPage/ErrorPage';

const NavRoutes = () => {

    // const fullscreenProps = useFullscreenPropsContext();
    // const {  genrePath } = fullscreenProps.fullscreenProps;
    
    return (
    
        <Routes>
            <Route path='/browse' exact element={<Hero/>} />
            <Route path='/Search/:genrePath' element={<Search/>} />
            <Route path='/Movies/:genrePath' element={<Movies/>} />
            <Route path='/TvShows/:genrePath' element={<TvShows/>} />
            {/*<Route path='Saved' element={<Saved />} /> */}
            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}

export default NavRoutes;