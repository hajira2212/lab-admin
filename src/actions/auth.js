import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alert';
export const Api_url =  "/api"

export const register = ({company, name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ company, name, email, password });
    try{
        const res = await axios.post( `${Api_url}/auth/register`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }catch(err){
        // const error = err.response.data.error;
        setAlert(err.message, 'danger');
        
        dispatch({
            type: REGISTER_FAIL
        })
    }
}