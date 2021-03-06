import { Box, Skeleton } from '@mui/material';
import React from 'react';
import './Skeleton.scss';

const SkeletonLoader = () => {
    return (
        <Box className="skeleton-container">

            <Box className="billboard-skeleton">
                <Box className="inner-wrapper">
                    <Skeleton className="skeleton title" variant="rectangular" />
                    <Skeleton className="skeleton original"  variant="rectangular" />  
                    <Skeleton className="skeleton description"  variant="rectangular" />

                    <Box className="billboard-buttons">
                        <Skeleton className="skeleton button"  variant="rectangular"/>
                        <Skeleton className="skeleton button" variant="rectangular"/>
                    </Box>
                </Box>
            </Box>

            <Box className="row-skeleton">

                <Skeleton className="skeleton-title" variant="rectangular" width={60} height={20} />

                <Box className="posters-skeleton">
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                    <Skeleton className="skeleton" variant="rectangular" />
                </Box>

            </Box> 

        </Box>
    )
}

export default SkeletonLoader;
