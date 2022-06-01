import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from '../../Webpages/Hero/Hero';
import Movies from '../../Webpages/Movies/Movies';
import TvShows from '../../Webpages/TvShows/TvShows';
import Search from '../../Webpages/Search/Search';
import RegisterPage from '../../Webpages/Register/RegisterPage.jsx'
import LoginPage from '../../Webpages/LoginPage/LoginPage';
import ErrorPage from '../../Webpages/ErrorPage/ErrorPage';
import Account from '../../Webpages/Account/Account';
import Update from '../../Webpages/UpdatePage/Update';
import { UpdateEmail, UpdateUsername, UpdatePassword } from '../../containers';


const NavRoutes = ({user}) => {

    return (
    
        <Routes>
            <Route path='/' exact element={ user ? <Hero/> : <Navigate replace to="/register"/>} />
            <Route path='/register' exact element={ !user ? <RegisterPage/> : <Navigate replace to="/"/>} />
            <Route path='/login' exact element={!user ? <LoginPage/> : <Navigate replace to="/"/>} />
            {
                user && (
                    <>
                        <Route exact path='/Search/:genrePath' element={<Search/>} />
                        <Route exact path='/Movies/:genrePath' element={<Movies/>} />
                        <Route exact path='/TvShows/:genrePath' element={<TvShows/>} />
                        <Route exact path='/YourAccount' element={<Account/>}/>
                        <Route exact path='/UpdateAccount' element={<Update/>}>
                            <Route exact path='password' element={<UpdatePassword/>} />
                            <Route exact path='username' element={<UpdateUsername/>} />
                            <Route exact path='email' element={<UpdateEmail/>} />
                        </Route>
                        
                    </>
                )
            }
            
            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}

export default NavRoutes;