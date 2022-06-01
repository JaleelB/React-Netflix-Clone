import { Box } from "@mui/material";
import React, {useState, useContext, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './UpdateUsername.scss';
import useFetchApi from '../../hooks/useFetchAPi';
import { AuthenticationContext } from '../../authenticationContext/AuthenticateContext';
import { Loading } from "../../components";

const UpdateUsername = () => {

    const [emptyField, setEmptyField] = useState(false);
    const [matchCurrentUsername, setMatchCUrrentUsername] = useState(null);
    const [confirmNewUsernameMatch, setConfirmNewUsernameMatch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [startLoading, setStartLoading] = useState(false);
    const [username, setUsername] = useState('');

    const {user} = useContext(AuthenticationContext);
    const {apiData, error} = useFetchApi(`/users/find/${user.details._id}`);

    const currentUsernameRef = useRef();
    const newUsernameRef = useRef();
    const confirmUsernameRef = useRef();

    // console.log(user,apiData )


    const updateUsername = async ()=>  await axios.put(`/users/update/${user.details._id}`, {username: username});

    useEffect(() => {

        if(matchCurrentUsername === true && confirmNewUsernameMatch === true && username !== ""){
         
            setStartLoading(true); 
            updateUsername();
        }
        
    }, [matchCurrentUsername, confirmNewUsernameMatch]);


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
        <form className="update-username-container">
            <h1 className="title">Change Username</h1>
            
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
                <li className="current-username-wrapper">
                    <input ref={currentUsernameRef} type="text" name="current-username" id="current-username" placeholder="Current Username"/>
                    { matchCurrentUsername === false ? 
                        <Box className="validate-message">
                            The username you provided does not match your current username
                        </Box> : ''
                    }
                </li>
                <li className="new-username-wrapper">
                    <input 
                        ref={newUsernameRef} 
                        type="text" 
                        name="new-username" 
                        id="new-username" 
                        placeholder="Enter New Username"
                        onChange={()=> setUsername(newUsernameRef.current.value)}
                    />
                </li>
                <li className="confirm-username-wrapper">
                    <input ref={confirmUsernameRef} type="text" name="confirm-username" id="confirm-username" placeholder="Confirm New Username"/>
                </li>
                { confirmNewUsernameMatch === false ? 
                        <Box className="validate-message">
                            { username === apiData.username ? <p>Your new username cannot be the same as the current username </p>: ''}
                            <p>Your new username doesn't match</p>
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


                        if(currentUsernameRef.current.value === "" ||  newUsernameRef.current.value === "" ||  confirmUsernameRef.current.value === "" ){
                            setEmptyField(true);
                        }
                        else{
                            setEmptyField(false);

                            if(apiData.username !== currentUsernameRef.current.value) setMatchCUrrentUsername(false);
                            else setMatchCUrrentUsername(true);

                            if(newUsernameRef.current.value !== confirmUsernameRef.current.value) setConfirmNewUsernameMatch(false);
                            else setConfirmNewUsernameMatch(true);

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

export default UpdateUsername;