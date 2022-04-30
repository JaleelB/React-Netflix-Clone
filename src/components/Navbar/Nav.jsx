// import * as React from 'react';
import { AppBar,Toolbar,Box} from '@mui/material';
import React, { useState, useEffect, useContext } from "react";
import './Nav.scss'
import { Link } from "react-router-dom";
import {useFullscreenPropsContext} from '../../FullscreenPropsContext';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { loginStart, logout } from '../../authenticationContext/AuthenticationActions';


export default function Nav() {

  const pages = [ 'Search', 'Movies', 'TvShows', 'Saved'];
  const settings = ["Account", "Logout"];
  const [checked, setChecked] = useState(false);
  const [darkNavbar, setDarkNavbar] = useState(false);
  const urlIdParameters = [23, 46, 85, 1001];
  const {dispatch} = useContext(AuthenticationContext)


  const handleNavbarChange = () => {
      if (window.scrollY > 100) setDarkNavbar(true); 
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
    <Box className={`${disablePointer ? 'disable-pointer' : ''}`} sx={{ flexGrow: 1}}>
      <AppBar sx={{ boxShadow: 'none', color: 'white', zIndex: 33, background:`${darkNavbar ? '#171717' : 'transparent'}`}}>
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
                                  to={'/browse'}
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


              <Box sx={{display: {xs: 'none', md: 'block'}, paddingRight: '2%'}} className="nav-avatar-wrapper"> 
                <Box className="profile">
                  <img 
                    className="nav-avatar" 
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
                    alt="Avatar"
                  /> 

                  <ArrowDropDown className={`dropdown-arrow`}/>
                </Box>

                <Box className="menu-dropdown">
                  <ArrowDropUp className="dropup-arrow"/>
                  <Box className="settings">
                    
                    <ul className="settings-list">
                      {  
                        settings.map((setting, index)=>{
                            return (
                              <li 
                                key={index} 
                                className="settings-list-item"
                                onClick={ () => setting === "Logout" ? dispatch(logout()) : ''}
                              >
                                {setting}
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
