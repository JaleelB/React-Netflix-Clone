import { ChevronRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './CTAEmailForm.scss';

const CTAEmailForm = () => {

    const [email, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const inputFormRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{

        e.preventDefault();

        if(inputFormRef.current.value !== "" && email === ""){
            setEmailAddress(inputFormRef.current.value)
            inputFormRef.current.value = "";
        }

        else if(inputFormRef.current.value !== "" && email !== "" && username === ""){
            setUserName(inputFormRef.current.value)
            inputFormRef.current.value = "";
        }

        else if(inputFormRef.current.value !== "" && email !== "" && username !== "" && password === ""){
            setPassword(inputFormRef.current.value);
            // const password = inputFormRef.current.value
            try{
                await axios.post('userAuthentication/register', {email, username, password})
                navigate("/login");
            }catch(error){}
        }

    };

    return (
        <Box className="cta-form-container">

            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className="form-input-wrapper">
                        <input
                            className="input" 
                            ref={inputFormRef}
                            type={
                                !email ? "text" : 
                                !username && email ? "text" : 
                                "password"
                            }
                            placeholder={
                                !email ? "Email Address" : 
                                !username && email ? "Username" : 
                                "Password"
                            }
                        />
                        <label className="floating-label">
                            {
                                !email ? "Email Address" : 
                                !username && email ? "Username" : 
                                "Password"
                            }
                        </label>


                <Button className="get-started-btn btn" onClick={handleSubmit}>
                    <span>
                        {
                            !email ? "Enter Email" : 
                            !username && email ? " Enter Username" : 
                            "Enter Password"
                        }
                    </span>
                    <ChevronRight className="arrow"  />
                </Button>

            </form>
    
        </Box>
    )
}

export default CTAEmailForm
