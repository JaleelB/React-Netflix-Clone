import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../../Webpages/Hero/Hero';
import Movies from '../../Webpages/Movies/Movies';
import TvShows from '../../Webpages/TvShows/TvShows';
import Search from '../../Webpages/Search/Search';
import Saved from '../../Webpages/Saved/Saved';

const NavRoutes = () => {

    return (
    
        <Routes>
            <Route path='/' exact element={<Hero/>} />
            <Route path='Search' element={<Search/>} />
            {/* <Route path='Movies' element={<Movies fullscreenProps={fullscreenProps}/>} />
            <Route path='TvShows' element={<TvShows fullscreenProps={fullscreenProps}/>} />
            <Route path='Saved' element={<Saved />} /> */}
        </Routes>

    )
}

export default NavRoutes;