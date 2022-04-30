import AuthenticationReducer from './AuthenticationReducer';
import { createContext, useReducer, useEffect, useState } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};

export const AuthenticationContext = createContext(INITIAL_STATE);

export const AuthenticationContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, INITIAL_STATE);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    //saves user informaton after login to prevent losing it when refreshing
    useEffect(() => {
        if(stayLoggedIn) localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user, stayLoggedIn]);

    return (
        <AuthenticationContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
                setStayLoggedIn,
                stayLoggedIn
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );


};