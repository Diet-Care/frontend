import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_PASSWORD, UPDATE_USERNAME } from "../../actionLogin/action";
import { combineReducers } from "redux";

const initialState = {
    username: '',
    password: '',
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
        case UPDATE_USERNAME:
            return{
                ...state,
                username: action.payload,
            }
        case UPDATE_PASSWORD:
            return{
                ...state,
                password: action.payload,
            }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;