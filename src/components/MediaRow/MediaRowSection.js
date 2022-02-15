import { Box } from '@mui/material';
import React from 'react';


const MediaRowSection = ({title, medias}) => {
    
    return (
        <Box className="media-container" sx={{
            margin: '1rem auto'
        }}>
            <Box className="title-wrapper" sx={{paddingLeft: '1rem'}}>
                <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
            </Box>
             
            <Box className="media-row" sx={{
                display: 'grid', gap: '1rem', gridAutoFlow: 'column',
                gridAutoColumns:'11%',
                padding: '1rem', margin: '1rem 0 0 0', overflowX: 'auto',
            }}>
            {
                medias.map((media) => {
                    return <Box key={media.id} className="media-poster-container" sx={{width: '10rem'}}>
                                <img style={{margin: '0.5rem', inlineSize: '100%'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                            </Box>
                })   
            }     
        </Box>
        </Box>
    )
}

export default MediaRowSection;
