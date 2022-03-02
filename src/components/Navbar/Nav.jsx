// import * as React from 'react';
import { AppBar,Typography,Toolbar,Box} from '@mui/material';
import React, { useState } from "react";
import './Nav.scss'
import { Link } from "react-router-dom";


export default function Nav() {

  const pages = [ 'Search', 'Movies', 'TvShows', 'Saved'];
  const [checked, setChecked] = useState(false);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none', color: 'white', zIndex: 33}}>
        <Toolbar sx={{display: { xs: 'flex'}}}>

          <Box sx={{position: 'relative', left: '0', display: { xs: 'flex'}}}>

            <Box sx={{display: { xs: 'block', md: 'none' } }}>
              <Link to={'/'}>
                <img className="netflix-small-logo" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" alt="mobile netflix icon"/>
              </Link>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'block' } }}>
              <Link to={'/'}>
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
                                <Link className="nav-link" style={!checked ? {pointerEvents: "none"} : null} to={'/'}>Discover</Link>
                              </li>
                              {pages.map((page) => (
                                <li className="nav-item" key={page}  onClick={() => { if(checked) setChecked(!checked) }}>
                                  <Link className="nav-link"  style={!checked ? {pointerEvents: "none"} : null} to={`/${page}`}>{page}</Link>
                                </li>
                              ))}
                          </ul>
                        }
                      </Box>

                

              </Box>
                  
              <Box className="full-nav" sx={{display: {xs: 'none', md: 'flex'}, gap: '1rem'}}>
                    <Box className="full-nav-item">
                      <Link className="full-nav-link" style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} to={'/'}>Discover</Link>
                    </Box>
                    {pages.map((page) => (
                        <Box className="full-nav-item" key={page}>
                          <Link className="full-nav-link" style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} to={`/${page}`}>{page}</Link>
                        </Box>
                    ))}
              </Box>

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  
  );
}
