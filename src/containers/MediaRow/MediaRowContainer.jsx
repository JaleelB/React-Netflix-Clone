import { Box } from '@mui/material';
import React from 'react';
import {MediaRowWrapper, MediaRowTitle, PaginationIndicator } from '../../components';
import './MediaRow.scss';
import {RowPropsProvider} from '../../RowPropsContext';

const MediaRowContainer = ({title, medias, netflixOriginal, typeMedia, className,disableHover}) => {

    return (
        <RowPropsProvider>
            <Box className="media-container">

                <MediaRowTitle title={title ? title : ''}/>
                <PaginationIndicator 
                    posterNum={medias.length} 
                />
                {
                    medias &&  <MediaRowWrapper 
                                medias={medias}   
                                netflixOriginal={netflixOriginal}
                                typeMedia={typeMedia}
                                className={className}
                                disableHover={disableHover}

                            /> 
                }
   
            </Box> 
        </RowPropsProvider>
    )
    
}

export default MediaRowContainer;
