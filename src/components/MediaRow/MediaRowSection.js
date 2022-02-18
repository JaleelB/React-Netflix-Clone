import { Box,Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import apiComponents from '../../components/API/Api';


const MediaRowSection = ({title, medias}) => {

    const [activeId, setActiveId] = useState(null); //determines which poster is active based on the id of the poster component
    const [activeFirstPoster, setActiveFirstPoster] = useState(true);                            

    const handleActivePoster = (id) =>{ 
        if(activeFirstPoster)setActiveFirstPoster(!activeFirstPoster);
        setActiveId(id); //updates the stater with the id of the component clicked. if they match it assigns class to poster
    };

    const handleObjectNameKey = (object)=>{
        let value =  ('name' in object) ? 'name' : 'title';
        return value;
    };

    const makeObjectArray = (object) =>{
        let objectToArray = [];
        for(let objectItem in object){
            
            for(let i=0; i<apiComponents[3].length; i++){
                if(object[objectItem] in apiComponents[3][i]){
                    objectToArray.push(apiComponents[3][i][`${object[objectItem]}`])
                }
            }
        }
        if(objectToArray.length > 3) objectToArray.pop();
        return objectToArray;
    };
    
    return (
        <Box className="media-container" sx={{
            margin: '0 auto'
        }}>
            <Box className="title-wrapper" sx={{paddingLeft: '1rem'}}>
                <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
            </Box>
             
            <Box className="media-row" sx={{
                display: 'grid', gap: '1rem', gridAutoFlow: 'column',
                // gridAutoColumns:'11%',
                padding: '3rem 1rem', margin: '0', overflowX: 'auto',
            }}>
                {
                    
                    medias.map((media,index) => {
                        return <Box 
                                    key={media.id}
                                    className={
                                        `media-poster stacked ${(media.id === activeId) ? 'active-poster': ''} ${(index===0 && activeFirstPoster) ? 'active-poster': ''}`
                                    } 
                                    sx={{width: '9rem', position: 'relative'}}
                                    onClick={() => handleActivePoster(media.id)}
                                >
                                    <img className="media-poster-image" style={{ inlineSize: '100%', objectFit: 'cover'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                                    <Box className="media-poster-content">

                                        <Typography className="media-name" variant="subtitle1" component="h2">{media[handleObjectNameKey(media)]}</Typography>
                                        <Box className="media-poster-media_type-details">
                                            <Typography className='media-poster-media_type' variant="subtitle2" component="h4"> 
                                                {media.media_type.toUpperCase()}
                                            </Typography>
                                            <Typography className="media-rating" variant="subtitle2" component="h4">{media.vote_average}</Typography>
                                        </Box>
                                        <Box className="media-genres">
                                            <ul className="genre-list">
                                                {
                                                    makeObjectArray(media.genre_ids).map((genre, index) => {
                                                        return <li key={index} className="genre-text"><Typography variant="string" component="h6">{genre}</Typography></li>
                                                    })
                                                    
                                                }
                                            </ul>
                                        </Box>
                                        
                                    </Box>
                                    
                                    <Box className="overlay"></Box>
                                </Box>
                    })   
                }     
            </Box>
        </Box> 
    )
}

export default MediaRowSection;
