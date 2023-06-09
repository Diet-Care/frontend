import axios from "axios"

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const LOGIN_FAILURE = 'LOGIN_FAITLURE';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch({
            type : LOGIN_REQUEST
        });

        try {
            const response = await axios ('https://6455446cf803f345763ef5b5.mockapi.io/api/login', {
                method : 'POST',
                body : JSON.stringify({username, password}),
                headers: {
                    'Content-Type' : 'aplication/json'
                },
            });

            if (response.status === 200) {
                dispatch({type: LOGIN_SUCCESS});
            }else{
                throw new Error('Login Failed');
            }
        } catch (error) {
            dispatch({type : LOGIN_FAILURE, payload: error.message});
        }
    };
};

export const updateName = (username) => {
    return {
        type: UPDATE_USERNAME, 
        payload: username,
    };
};

export const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD, 
        payload: password,
    };
};