import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';


export const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow placement="top" classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: '#000',
        width: 'maxContent',
        fontSize: '1rem',
        boxShadow: '0 2px 10px 0 #000',
        fontWeight: 500,
        paddingInline: '10px',
    },
}));
  
