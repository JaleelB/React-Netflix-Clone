// import * as React from 'react';
import { AppBar,Toolbar,Box} from '@mui/material';
import React, { useState, useEffect, useContext } from "react";
import './Nav.scss'
import { Link } from "react-router-dom";
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import { ArrowDropUp, ArrowDropDown, Person, Logout } from '@mui/icons-material';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { logout } from '../../authenticationContext/AuthenticationActions';
import useFetchApi from '../../hooks/useFetchAPi';


export default function Nav() {

  const pages = [ 'Search', 'Movies', 'TvShows', 'Saved'];
  const settings = ["Manage Account", "Sign Out Of Netflix"];
  const [checked, setChecked] = useState(false);
  ;
  const [darkNavbar, setDarkNavbar] = useState(false);
  const urlIdParameters = [23, 46, 85, 1001];
  const {dispatch, setStayLoggedIn, stayLoggedIn} = useContext(AuthenticationContext);

  const {user} = useContext(AuthenticationContext);
  const {apiData} = useFetchApi(`/users/find/${user.details._id}`);


  const handleNavbarChange = () => {
      if (window.scrollY > 1) setDarkNavbar(true); 
      else setDarkNavbar(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleNavbarChange);

    return () => {
      window.removeEventListener("scroll", handleNavbarChange);
    };
  }, []);

  const fullscreenProps = useFullscreenPropsContext();
  const { disablePointer, loading } = fullscreenProps.fullscreenProps;


  return (
    // <Box sx={{ flexGrow: 1}}>
    <Box className={`netflix-navbar ${disablePointer ? 'disable-pointer' : ''}`} sx={{ flexGrow: 1}}>
      <AppBar position="absolute" sx={{ boxShadow: 'none', color: 'white', zIndex: 33, background:`${darkNavbar ? '#171717' : 'transparent'}`}}>
        <Toolbar sx={{display: { xs: 'flex'}}}>

          <Box sx={{position: 'relative', left: '0', display: { xs: 'flex'}, paddingLeft: '2%'}}>

            <Box sx={{display: { xs: 'block', md: 'none' } }}>
              <Link 
                to={'/'}
                onClick={loading} 
              >
                <img className="netflix-small-logo" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="mobile netflix icon"/>
              </Link>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'block' }}}>
              <Link 
                to={'/'}
                onClick={loading} 
              >
                <img className="netflix-large-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="destop netflix icon"/>
              </Link>
            </Box>


            <Box className ="nav" sx={{ flexGrow: 1, display: { xs: 'block', md: 'none'} }}>
                <input 
                  type="checkbox" 
                  className="nav-checkbox" 
                  id="nav-toggle"
                  checked={checked}
                  onChange={() => {}}
                />
                <label 
                  htmlFor="nav-toggle" 
                  className="nav-button"
                  onClick={() => setChecked(!checked)}
                >
                  <span className="nav-icon">&nbsp;</span>
                </label>


                      <Box className="nav-background">&nbsp;</Box> 
                      <Box className="nav-navigation" sx={{ display: { md: 'block' }}}>
                        {
                          <ul className="nav-list">
                              <li className="nav-item" onClick={() => { if(checked) setChecked(!checked) }}>

                                <Link 
                                  className="nav-link" 
                                  onClick={loading} 
                                  style={!checked ? {pointerEvents: "none"} : null} 
                                  to={'/'}
                                >
                                  Home
                                </Link>

                              </li>
                              {pages.map((page, index) => (
                                <li className="nav-item" key={page}  onClick={() => { if(checked) setChecked(!checked) }}>
                                  
                                  <Link 
                                    className="nav-link"  
                                    onClick={loading} 
                                    style={!checked ? {pointerEvents: "none"} : null} 
                                    to={`/${page}/${urlIdParameters[index]}`}
                                  >
                                    {page}
                                  </Link>

                                </li>
                              ))}
                          </ul>
                        }
                      </Box>

              </Box>


              <Box sx={{display: {xs: 'block'}, paddingRight: '2%'}} className="nav-avatar-wrapper"> 
                <Box className="profile">
                  <img 
                    className="nav-avatar" 
                    src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg" 
                    alt="Avatar"
                  /> 

                  <ArrowDropDown className={`dropdown-arrow`}/>
                </Box>

                <Box className="menu-dropdown">
                  <ArrowDropUp className="dropup-arrow"/>
                  <Box className="settings">
                    
                    <ul className="settings-list">
                      <li className="profile-image-wrapper">
                          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c659933850498.56ba69ac2e080.png" alt="" className="dropdown-image"/>
                          {apiData.username}
                      </li>
                      {  
                        settings.map((setting, index)=>{
                            return (
                              <li 
                                key={index} 
                                className="settings-list-item"
                                onClick={ () => {
                                  if(setting === "Sign Out Of Netflix"){
                                    setStayLoggedIn(!stayLoggedIn);
                                    dispatch(logout());
                                  }
                                }}
                              >
                                <Link to={setting === "Manage Account" ? '/YourAccount' : ''}> 
                                  {index === 1 ? <Logout className="dropdown-icon"/> : <Person className="dropdown-icon"/>}
                                  {setting}
                                </Link>
                              </li>
                            )
                        })
                      }
                    </ul>
                  </Box>
                </Box>
              </Box>

                  
              <Box className="full-nav" sx={{display: {xs: 'none', md: 'flex'}, gap: '1rem', paddingLeft: '2%'}}>
                    <Box className="full-nav-item">
                      <Link 
                        className="full-nav-link" 
                        style={{textDecoration: 'none', textAlign: 'center', color: 'white'}}
                        onClick={loading} 
                        to={'/'}>
                          Home
                        </Link>
                    </Box>
                    {pages.map((page, index) => (
                        <Box className="full-nav-item" key={page}>
                          <Link 
                            className="full-nav-link" 
                            onClick={loading} 
                            style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} 
                            to={`/${page}/${urlIdParameters[index]}`}
                          >
                            {page}
                          </Link>
                        </Box>
                    ))}
              </Box>

              

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  
  );
}
