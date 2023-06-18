import { START_AUTHENTICATION_LOADING, STOP_AUTHENTICATION_LOADING, STORE_USER_DETAILS, UPDATE_LOGIN_EMAIL, START_LOG_OUT_LOADING, STOP_LOG_OUT_LOADING, CLEAR_USER_DETAILS, START_UPDATE_LOADING, STOP_UPDATE_LOADING } from "../../Actions/ActionTypes";

const intialState = {
    userDetails : null,
    isUserLoggedIn : false,
    isLogoutLoading : false,
    isLoading : false,
    isUpdateLoading : false,
    loginDetails : {
        email : ''
    }
}

export const AuthenticationReducer = (state = intialState, action) => {
    switch(action.type){
        case START_AUTHENTICATION_LOADING : return {
            ...state,
            isLoading : true
        }

        case STOP_AUTHENTICATION_LOADING : return {
            ...state,
            isLoading : false
        }

        case STORE_USER_DETAILS : return {
            ...state,
            isUserLoggedIn : true,
            isLoading : false,
            userDetails : action.payload
        }

        case UPDATE_LOGIN_EMAIL : return {
            ...state,
            loginDetails : {
                email : action.payload
            }
        }

        case CLEAR_USER_DETAILS : return {
            ...state,
            isLogoutLoading : false,
            isUserLoggedIn : false
        }

        case START_LOG_OUT_LOADING : return {
            ...state,
            isLogoutLoading : true
        }

        case STOP_LOG_OUT_LOADING : return {
            ...state,
            isLogoutLoading : false
        }

        case START_UPDATE_LOADING : return {
            ...state,
            isUpdateLoading : true
        }

        case STOP_UPDATE_LOADING : return {
            ...state,
            isUpdateLoading : false
        }

        default : return state;
    }
}