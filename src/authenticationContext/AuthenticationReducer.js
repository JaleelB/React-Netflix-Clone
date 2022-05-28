//takes actions and update context state

const AuthenticationReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };
        case "LOGOUT":
            return {
                user: null,
                isFetching: true,
                error: null
            };

        default:
            return { ...state };
    }
};

export default AuthenticationReducer;