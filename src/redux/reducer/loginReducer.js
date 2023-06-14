import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionRegister/actionLogin"
import { combineReducers } from "redux";

const initialState = {
    login: [],
    isLoading: false,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: null,
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;