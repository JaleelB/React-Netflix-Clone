import React from 'react';
import { Box, Button } from '@mui/material';
import {HeaderTitle, HeaderDescription } from '../../components';
import './Header.scss';

const Header = ({movie}) => {

    // const handleObjectNameKey = (object)=>{
    //     let value =  ('name' in object) ? 'name' : 'title';
    //     return value;
    // };

    return (
        
        <Box className="header" sx={{ 
            background: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
            
        }}>
            <Box className="header__cta-text-wrapper">
                    {/* <HeaderTitle title={movie['title'] !== undefined ? movie?.title : movie?.name}/> */}
                    {/* <HeaderTitle title={movie[handleObjectNameKey(movie)]}/> */}
                    <HeaderDescription description={movie?.overview}/>
                    <Box className="header__button-container">
                       <Button variant="outlined" className="header__button-play">Play Trailer</Button>
                        <Button variant="outlined" className="header__button-details">View Info</Button>
                    </Box> 
            </Box> 
           
        </Box>
    )
}

export default Header;


//<Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange} > 
// {objTest.length && objTest.map(myList => { return( <MenuItem key = {myList.ClientDatabase} value = {myList} > {myList.ClientName} + {myList.Site} </MenuItem> ) })} 
//</Select>