import { Box,Typography,Rating } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import apiComponents from '../../components/API/Api';

const MediaRowSection = ({title, medias, changeBackground}) => {

    //determines which poster is active based on the id of the poster component
    const [activeId, setActiveId] = useState(null); 
    const [activeFirstPoster, setActiveFirstPoster] = useState(true); 
    const [voteAverage, setVoteAverage] = useState(1);

    const handleActivePoster = (id) =>{ 
        if(activeFirstPoster)setActiveFirstPoster(!activeFirstPoster);
        //updates the stater with the id of the component clicked. if they match it assigns class to poster
        setActiveId(id); 
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
            margin: '0 auto', overflow: 'hidden'
        }}>
            <Box className="title-wrapper" sx={{paddingLeft: '1rem'}}>
                <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
            </Box>
             
            <Box 
                className="media-row" 
                sx={{
                    display: 'grid', 
                    // gap: '.5rem',
                    minHeight: '10rem',
                    gridAutoFlow: 'column',
                    scrollBehavior: 'smooth',
                    padding: '3rem 4rem', margin: '0', overflowX: 'auto', overflowY: 'hidden'
                }}
            >
                {
                    
                    medias.map((media,index) => {
                        return <Box 
                                    key={media.id}
                                    // {index === 0 ? changeBackground("https://image.tmdb.org/t/p/original" + media.backdrop_path): ''}
                                    className={
                                        `media-poster stacked ${(media.id === activeId) ? 'active-poster': ''} ${(index===0 && activeFirstPoster) ? 'active-poster': ''}`
                                    } 
                                    sx={{
                                        // width: '15vw', 
                                        position: 'relative',
                                        width: 'clamp(9rem,17rem,24rem)'
                                    }}
                                    onClick={() => {
                                        handleActivePoster(media.id);
                                        setVoteAverage(media.vote_average);
                                        changeBackground("https://image.tmdb.org/t/p/original" + media.backdrop_path);
                                    }}
                                >
                                    {/* {console.log(voteAverage)}  */}
                                    <img className="media-poster-image" draggable="false" style={{ inlineSize: '100%', objectFit: 'cover'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                                    <Box className="media-poster-content">

                                        <Typography className="media-name" variant="subtitle1" component="h2">{media[handleObjectNameKey(media)]}</Typography>
                                        <Box className="media-poster-media_type-details">
                                            <Typography className='media-poster-media_type' variant="subtitle2" component="h4"> 
                                                {media.media_type.toUpperCase()}
                                            </Typography>
                
                                            <Rating 
                                                name="read-only"
                                                value={voteAverage} 
                                                precision={0.1}
                                                readOnly
                                            />
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

                                </Box>
                    })   
                }
                 
            </Box>
        </Box> 
    )
}

export default MediaRowSection;
