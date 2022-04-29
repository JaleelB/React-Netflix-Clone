import AuthenticationReducer from './AuthenticationReducer';
import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};

export const AuthenticationContext = createContext(INITIAL_STATE);

export const AuthenticationContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthenticationReducer, INITIAL_STATE);

    //saves user informaton after login to prevent losing it when refreshing
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthenticationContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );


};