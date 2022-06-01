import { Box } from "@mui/material";
import React, {useState, useEffect, useRef, useContext} from "react";
import { Link } from "react-router-dom";
import './UpdatePassword.scss';
import axios from "axios";
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { Loading } from "../../components";
import bcrypt from "bcryptjs";

const UpdatePassword = () => {

    const [emptyField, setEmptyField] = useState(false);
    const [confirmNewPasswordMatch, setConfirmNewPasswordMatch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [startLoading, setStartLoading] = useState(false);
    const [password, setPassword] = useState('');

    const {user} = useContext(AuthenticationContext);
    const {apiData, error} = useFetchApi(`/users/find/${user.details._id}`);

    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const updatePassword = async ()=>  await axios.put(`/users/update/${apiData._id}`, {password: password});

    useEffect(() => {

        if(confirmNewPasswordMatch === true && password !== ""){
            
            setStartLoading(true); 
            updatePassword();
        }
        
    }, [confirmNewPasswordMatch]);


    useEffect(() => {
        if(startLoading === true){
            setIsLoading(true);
            const animationTimer = setTimeout(() => setIsLoading(false), 2000);
            const successTimer = setTimeout(() => setStartLoading(false), 10000);
            return () => {
                clearTimeout(animationTimer);
                clearTimeout(successTimer);
            }
        }
        
    }, [startLoading]);



    return(
        <form className="update-password-container">
            <h1 className="title">Change Password</h1>

            <Box className="error-message-wrapper">
                { 
                    emptyField && 
                    <h2 className="empty-message">
                        Do not leave any fields empty. Fill all available fields before saving changes.
                    </h2>
                }

                { 
                    error && 
                    <h2 className="error-message">
                        {error.message}
                    </h2>
                }
            </Box>

            <ul className="form-structure"> 
         
                <li className="new-password-wrapper">
                    <input 
                        ref={newPasswordRef} 
                        type="text" 
                        name="new-password" 
                        id="new-password" 
                        placeholder="Enter New Password"
                        onChange={()=> setPassword(newPasswordRef.current.value)}
                    />
                </li>
                <li className="confirm-password-wrapper">
                    <input ref={confirmPasswordRef} type="text" name="confirm-password" id="confirm-password" placeholder="Confirm New Password"/>
                </li>
                { confirmNewPasswordMatch === false ? 
                        <Box className="validate-message">
                            { password === confirmPasswordRef.current.value ? <p>Your new password cannot be the same as the current password </p>: ''}
                            <p>Your new password doesn't match</p>
                        </Box> : ''
                    }
            </ul>

            { startLoading && 
                <Box className="loading">
                    {isLoading ? <Loading/> : 'Update Successful'}
                </Box>
            }

            <Box className="cta-buttons">
                <button 
                    className="cta save-changes"
                    onClick={(e) =>{

                        e.preventDefault();
                        setStartLoading(false);


                        if(newPasswordRef.current.value === "" ||  confirmPasswordRef.current.value === "" ){
                            setEmptyField(true);
                        }
                        else{
                            setEmptyField(false);

                            if(newPasswordRef.current.value !== confirmPasswordRef.current.value) setConfirmNewPasswordMatch(false);
                            else setConfirmNewPasswordMatch(true);

                        }
                        
                    }}
                >
                    Save
                </button>
                <button className="cta cancel-changes">
                    <Link to={'/YourAccount'}>Cancel</Link>
                </button>
            </Box>
        </form>
    );
}

export default UpdatePassword;