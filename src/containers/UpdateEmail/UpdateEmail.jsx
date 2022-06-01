import { Box } from "@mui/material";
import React, {useState, useEffect, useContext, useRef} from "react";
import { Link } from "react-router-dom";
import './UpdateEmail.scss';
import axios from "axios";
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { Loading } from "../../components";

const UpdateEmail = () => {

    const [emptyField, setEmptyField] = useState(false);
    const [matchCurrentEmail, setMatchCUrrentEmail] = useState(null);
    const [confirmNewEmailMatch, setConfirmNewEmailMatch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [startLoading, setStartLoading] = useState(false);
    const [email, setEmail] = useState('');

    const {user} = useContext(AuthenticationContext);
    const {apiData, error} = useFetchApi(`/users/find/${user.details._id}`);

    const currentEmailRef = useRef();
    const newEmailRef = useRef();
    const confirmEmailRef = useRef();


    const updateEmail = async ()=>  await axios.put(`/users/update/${apiData._id}`, {email: email});

    useEffect(() => {

        if(matchCurrentEmail === true && confirmNewEmailMatch === true && email !== ""){
         
            setStartLoading(true); 
            updateEmail();
        }
        
    }, [matchCurrentEmail, confirmNewEmailMatch]);


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
        <form className="update-email-container">
            <h1 className="title">Change Email</h1>

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
                <li className="current-email-wrapper">
                    <input ref={currentEmailRef} type="text" name="current-email" id="current-email" placeholder="Current Email"/>
                    { matchCurrentEmail === false ? 
                        <Box className="validate-message">
                            The email you provided does not match your current email
                        </Box> : ''
                    }
                </li>
                <li className="new-email-wrapper">
                    <input 
                        ref={newEmailRef} 
                        type="text" 
                        name="new-email" 
                        id="new-email" 
                        placeholder="Enter New Email"
                        onChange={()=> setEmail(newEmailRef.current.value)}
                    />
                </li>
                <li className="confirm-email-wrapper">
                    <input ref={confirmEmailRef} type="text" name="confirm-email" id="confirm-email" placeholder="Confirm New Email"/>
                </li>
                { confirmNewEmailMatch === false ? 
                        <Box className="validate-message">
                            { email === apiData.email ? <p>Your new email cannot be the same as the current email </p>: ''}
                            <p>Your new email doesn't match</p>
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


                        if(currentEmailRef.current.value === "" ||  newEmailRef.current.value === "" ||  confirmEmailRef.current.value === "" ){
                            setEmptyField(true);
                        }
                        else{
                            setEmptyField(false);

                            if(apiData.email !== currentEmailRef.current.value) setMatchCUrrentEmail(false);
                            else setMatchCUrrentEmail(true);

                            if(newEmailRef.current.value !== confirmEmailRef.current.value) setConfirmNewEmailMatch(false);
                            else setConfirmNewEmailMatch(true);

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

export default UpdateEmail;