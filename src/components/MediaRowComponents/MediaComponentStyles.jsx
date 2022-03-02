import { Box } from "@mui/material";
import React from "react";
import '../../Webpages/Hero/Hero.scss';

export function MediaRowTitle({title}){
    return(
        <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
    );
}

export function MediaRowItems({posters}){
    return(
        <Box className="media-row" sx={{
            display: 'grid', gridAutoFlow: 'columns', gridAutoColumns:'19%',
            padding: '1rem', margin: '1rem 0 0 0',
        }}>
           {posters}   
        </Box>
    );
}

function MediaPoster({src, alt}){
    return(
        <Box className="media-poster-container" sx={{width: '10rem'}}>
            <img style={{margin: '0.5rem', inlineSize: '100%'}} src={src} alt={alt}/>
        </Box>
    );
}

//display: 'flex', padding: '0 55px'