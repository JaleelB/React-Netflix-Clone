import * as React from 'react';
import { AppBar,Avatar,Button,Typography,Toolbar,Box,Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../Webpages/Hero/Hero.scss';
import { Link } from "react-router-dom";


export default function Nav() {

  const pages = [ 'Search', 'Movies', 'TvShows', 'Saved'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none', color: 'white'}}>
        <Toolbar sx={{display: { lg: 'flex',xl: 'flex'}}}>

          <Box sx={{position: 'relative', left: '0', display: { xs: 'flex'}}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            >
              EMD
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
              <Button 
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{display: 'flex', marginLeft: '1rem', padding: '0', color :'white'}}
              >
                <Typography variant="subtitle1">Browse</Typography>
                <ArrowDropDownIcon/>
              </Button>

              <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu} >
                    <Link style={{textDecoration: 'none', textAlign: 'center', color: 'black'}} to={'/'}>Discover</Link>
                  </MenuItem>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} >
                      <Link style={{textDecoration: 'none', textAlign: 'center', color: 'black'}} to={`/${page}`}>{page}</Link>
                    </MenuItem>
                  ))}
                </Menu>
            </Box>
          </Box>

          <Box sx={{margin:'0 auto', display: { xs: 'none', md: 'block' }}}>
              <Button variant="text">
                <Link style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} to={'/'}>Discover</Link>
              </Button>
              {pages.map((page) => (
                <Button variant="text" key={page} >
                  <Link style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} to={`/${page}`}>{page}</Link>
                </Button>
              ))}
          </Box>

          <Avatar sx={{position: 'absolute', right: '1rem', marginLeft: '1rem'}}/>

        </Toolbar>
      </AppBar>
    </Box>
  
  );
}
