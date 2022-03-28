import { Close } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useRef } from 'react';

import './InputField.scss';

const InputField = ({updateTyping, setInput}) => {

    const handleTextFieldUpdate = (event) => {
        if(event.target.value !== "") updateTyping(true);
        else updateTyping(false);
    };

    const getInput = (event) => { 
        setInput(event.target.value) 
    };

    const inputField = useRef(null);

    return (
        <Box className="input-container">
            <input 
                className="input" 
                type="text"
                ref={inputField}
                placeholder="Search by movie, tv show, person etc..."
                onClick = { (event) => event.preventDefault() }
                onChange = { (e)=> {
                    handleTextFieldUpdate(e);
                    getInput(e);
                } }
            />
            <Close 
                className="delete"
                onClick={(e)=> {
                    setInput('');
                    inputField.current.value = '';
                    updateTyping(false);
                 } }
            />
        </Box>
    )
}

export default InputField;
