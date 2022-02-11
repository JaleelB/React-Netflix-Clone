import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import Card from '../../../components/Card/Card';
import '../Hero.scss';
import newMovies from '../NewMovies/NewMovies';

const MediaScroller = () => {

    let index = 1;
    let cardNumber = 0;


    return (
        <Box className="scroller-container">
            <Box className="media-scroller snap-inline"
            sx={{
                display: 'grid', gridAutoFlow: 'column', 
                placeItems: 'center', gap: '1rem',
                minHeight: '100%', width: '100%',
                padding:'3rem 2rem',overflowX: 'auto', 
                gridAutoColumns: '21%', border: '1px solid white', overscrollBehaviorInline: 'contain'
            }}>
                {
                    newMovies.map( (movie) =>{
                        cardNumber++;
                        return  <Card key={cardNumber} image = {movie.image} />
                    })
                }
                
            </Box>
            <Box className="media-navigation" sx={{ display: 'none', gap: 'calc(3rem + 3vw)'}}>
                <Box className="nav-buttons" sx={{display: 'flex', gap: 'calc(0.5rem + 0.5vw)', margin: '0 0 1rem'}}>
                    <Button variant="outlined" sx={{width: 'calc(2rem + 2vw)',height: 'calc(2rem + 2vw)',borderColor: '#fff', borderRadius: '50%' ,color: '#fff'}}> 
                        <NavigateBefore sx={{width: '80%', height: '80%'}}/> 
                    </Button>
                    <Button variant="outlined" sx={{width: 'calc(2rem + 2vw)',height: 'calc(2rem + 2vw)',borderColor: '#fff', borderRadius: '50%',color: '#fff'}}> 
                        <NavigateNext sx={{width: '80%', height: '80%'}}/> 
                    </Button>
                </Box>

                <Box className="nav-card-count">
                    <h2 className="big-heading" style={{color: '#fff'}}>0{index}</h2>
                </Box>
            </Box>
        </Box>
    )
}

export default MediaScroller;
