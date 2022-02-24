import { Box,Typography,Rating, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import apiComponents from '../../components/API/Api';

const MediaRowSection = ({title, medias, changeBackground}) => {
    
    //determines which poster is active based on the id of the poster component
    const [activeId, setActiveId] = useState(null); 
    const [activeFirstPoster, setActiveFirstPoster] = useState(true); 
    // const [voteAverage, setVoteAverage] = useState(1);

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

    console.table(medias);
    return (
        <Box className="media-container" sx={{
            margin: '0 auto', overflow: 'hidden'
        }}>
            <Box className="title-wrapper" sx={{padding: '0 1rem'}}>
                <h2 className="media-row-title" style={{color: '#fff'}}>{title}</h2>
            </Box>
             
            <Box 
                className="media-row" 
                sx={{
                    display: 'grid', 
                    // gap: '.5rem',
                    minHeight: '10rem',
                    gridAutoFlow: 'column', 
                    // gridAutoColumns: '23%',
                    scrollBehavior: 'smooth',
                    padding: '3rem 3rem 3rem 0', margin: '0', overflowX: 'auto', overflowY: 'hidden'
                }}
            >
                {
                    
                    medias.map((media,index) => {
                        return <Box 
                                    key={media.id}
                                    className={
                                        `media-poster stacked ${(media.id === activeId) ? 'active-poster': ''} ${(index===0 && activeFirstPoster) ? 'active-poster': ''}`
                                    } 
                                    sx={{
                                        // width: '15vw', 
                                        position: 'relative',
                                        // width: 'calc(50vw + 48px)'
                                        width: 'clamp(9rem,20rem,34rem)'
                                    }}
                                    // onLoad={()=>{ if(index === 0) changeBackground("https://image.tmdb.org/t/p/original" + media.backdrop_path) } }
                                    onClick={() => {
                                        handleActivePoster(media.id);
                                        // setVoteAverage(media.vote_average);
                                        // changeBackground("https://image.tmdb.org/t/p/original" + media.backdrop_path);
                                    }}
                                    onMouseOver = {() => {changeBackground("https://image.tmdb.org/t/p/original" + media.backdrop_path);}}
                                >
                                    
                                    <Box className="poster-image-wrapper">
                                        <img className="media-poster-image" draggable="false" style={{ inlineSize: '100%', objectFit: 'cover'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                                    </Box>

                                    <Box className="media-poster-content">

                                        <img className="media-poster-image" draggable="false" style={{ position: 'absolute', width: '100%', objectFit: 'cover', height: '50%'}} src={"https://image.tmdb.org/t/p/w300" + media.poster_path} alt={media.name}/>
                                        <Box classNAme="poster-content-wrapper" sx={{width: '100%', height: '50%'}}>
                                            <Typography className="media-name" variant="subtitle1" component="h2">{media[handleObjectNameKey(media)]}</Typography>
                                            <Box className="media-poster-media_type-details">
                                                              
                                                <Rating 
                                                    name="read-only"
                                                    value={media.vote_average} 
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

                                            <Box className="cta-buttons" sx={{display: 'flex', margin: '0 auto'}}>
                                                <Button>View More</Button>
                                                <Button>Add To List</Button>
                                            </Box>
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
