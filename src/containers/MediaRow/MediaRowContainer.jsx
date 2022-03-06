import { Box,Typography,Rating, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import {apiComponents} from '../../components';
import MediaRow from '../../components/MediaRowComponents/MediaRow';
import MediaRowTitle from '../../components/MediaRowComponents/MediaRowTitle';
import './MediaRow.scss'

const MediaRowContainer = ({title, medias, netflixOriginal,largeRow}) => {
    
    //determines which poster is active based on the id of the poster component
    const [activeId, setActiveId] = useState(null); 
    const [voteAverage, setVoteAverage] = useState(0);

    
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
            // margin: '0 auto', overflow: 'hidden', 
            // position:'relative'
        }}>

            <MediaRowTitle title={title}/>
            {medias &&  <MediaRow medias={medias} netflixOriginal={netflixOriginal} largeRow={largeRow}/> }
             
        </Box> 
    )
}

export default MediaRowContainer;
