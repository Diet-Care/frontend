// import axios from "axios"

export const REGIS_REQUEST = 'REGIS_REQUEST';
export const REGIS_SUCCESS = 'REGIS_SUCCES';
export const REGIS_FAILURE = 'REGIS_FAITLURE';

export const regis = (email, name, nomor, password) => {
    return async (dispatch) => {
        dispatch({
            type : REGIS_REQUEST
        });

        try {
            const response = await axios ('https://6455446cf803f345763ef5b5.mockapi.io/api/user', {
                method : 'POST',
                body : JSON.stringify({email, name, nomor, password}),
                headers: {
                    'Content-Type' : 'aplication/json'
                },
            });

            if (response.ok) {
                dispatch({type: REGIS_SUCCESS});
            }else{
                console.error(error);
            }
        } catch (error) {
            dispatch({type : REGIS_FAILURE, payload: error.message});
        }
    };
};
