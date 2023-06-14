import { REGIS_FAILURE, REGIS_REQUEST, REGIS_SUCCESS } from "../actionRegister/actionRegis"
import { combineReducers } from "redux";

const initialState = {
    login: [],
    isLoading: false,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case REGIS_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null,
            }
        case REGIS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: null,
            }
        case REGIS_FAILURE:
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