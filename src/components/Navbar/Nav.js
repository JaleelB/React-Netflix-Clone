import * as React from 'react';
import { AppBar,Avatar,Button,Typography,Toolbar,Box,Menu, MenuItem} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../Webpages/Hero/Hero.scss';



export default function Nav() {

  const pages = ['Home', 'Search', 'Movies', 'TV Shows', 'Saved'];
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
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
            </Box>
          </Box>

          <Box sx={{margin:'0 auto', display: { xs: 'none', md: 'block' }}}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Search</Button>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">TV Shows</Button>
            <Button color="inherit">My List</Button>
          </Box>

          <Avatar sx={{position: 'absolute', right: '1rem', marginLeft: '1rem'}}/>

        </Toolbar>
      </AppBar>
    </Box>
  
  );
}
