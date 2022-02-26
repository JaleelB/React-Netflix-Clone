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
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none', color: 'white'}}>
        <Toolbar sx={{display: { xs: 'flex'}}}>

          <Box sx={{position: 'relative', left: '0', display: { xs: 'flex'}}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            >
              EMD
            </Typography>

            <Box className ="nav" sx={{ flexGrow: 1, display: { xs: 'block', md: 'none'} }}>
                <input 
                  type="checkbox" 
                  class="nav-checkbox" 
                  id="nav-toggle"
                  checked={checked}
                />
                <label 
                  for="nav-toggle" 
                  class="nav-button"
                  onClick={() => setChecked(!checked)}
                >
                  <span class="nav-icon">&nbsp;</span>
                </label>

                <Box class="nav-background">&nbsp;</Box>


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
