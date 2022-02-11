import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../../Webpages/Hero/Hero';



const NavRoutes = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Hero/>} />
            {/* <Rosute path='/RecycleUS' element={<RecycleUS />} />
            <Route path='/WhyRecycle' element={<WhyRecycle />} />
            <Route path='/DonatePage' element={<DonatePage />} />
            <Route path='/SourcesPage' element={<SourcesPage />} /> */}
        </Routes>
    )
}

export default NavRoutes;