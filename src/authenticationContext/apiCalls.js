import axios from "axios";
import {loginStart, loginSuccess, loginFailure } from './AuthenticationActions';

export const login = async (userCredentials, dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("userAuthentication/login", userCredentials);
        dispatch(loginSuccess(res.data))
    }catch(error){dispatch(loginFailure());}
};