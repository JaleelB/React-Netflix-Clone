import { Close, TimerOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useRef } from 'react';

import './InputField.scss';

const InputField = ({updateTyping, setInput, isTyping, setSearchMovieResults, setSearchTVResults}) => {

    // let textSearch;
    const inputFieldRef = useRef(null);

    const handleTextFieldUpdate = (event) => {
        if(event.target.value !== "") updateTyping(true);
        else if(event.target.value === ''){
            setInput('');
            updateTyping(false);
        }
    };

    const getInput = (event) => { updateDebounceText(event.target.value); };

    const updateDebounceText = debounceInput(text=>{
        setInput(text);
    }, 1500);
    

    //add delay to settting input text delaying api call after a 1 sec pause of typing
    function debounceInput(callback, delay=1000){
        let timeout;
        return(...args) => {
            clearTimeout(timeout);
            timeout = setTimeout (() => {
                callback(...args)
            }, delay)
        }
    };

    return (
        <Box className="input-container">
            <input 
                className="input" 
                type="text"
                ref={inputFieldRef}
                placeholder="Search by movie, tv show, person etc..."
                onClick = { (event) => event.preventDefault() }
                onChange = { (e)=> {
                    handleTextFieldUpdate(e);
                    getInput(e);
                } }
            />
            {
                isTyping &&

                    <Close 
                        className="delete"
                        onClick={()=> {
                            setInput('');
                            inputFieldRef.current.value = '';
                            updateTyping(false);
                            setSearchMovieResults([]);
                            setSearchTVResults([]);
                        } }
                    />
            }
        </Box>
    )
}

export default InputField;
