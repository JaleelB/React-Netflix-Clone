import { Box } from '@mui/material';
import React, {useState} from 'react';
import GenreMenu from './GenreMenu';
import './GenreDropdown.scss';

const GenreDropdown = () => {

    const[showDropdown, setShowDropDown] = useState(false)

    return (
        <Box className="dropdown">
            <Box className="dropdown-trigger" onClick={ ()=> setShowDropDown(!showDropdown) }>
                <span>Genres</span>
                <span className="arrow"></span>
            </Box>
            {
                showDropdown && <GenreMenu setShowDropDown={setShowDropDown}/>
            }
        </Box>
    )
}

export default GenreDropdown;
