
import { config } from 'dotenv';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../constaints/userConstants'

import axios from 'axios'


//LOGIN
export const login =(email, password)=> async (dispatch)=>{
    try{
dispatch({type: LOGIN_REQUEST});
const config ={headers : {'Content-Type': 'application/json'}};
const {data} = await axios.post(
    '/api/v1/login',
    {email, password},
    config
);

dispatch({type: LOGIN_SUCCESS, payload: data.user})
    }catch(error){
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message})
    }
}


//REGISTER

export const register =(userData)=> async(dispatch)=> {
try{

dispatch({type: REGISTER_USER_REQUEST});
const config ={headers:{'Content-Type': 'multipart/form-data'}}; //multipart/form-data instead of json type, because in registration images also included

const {data} = await axios.post(`/api/v1/register`, userData, config);
dispatch({type: REGISTER_USER_SUCCESS, payload: data.user})
}catch(error){
    dispatch({type: LOGIN_FAIL, payload: error.response.data.message})
   
}
}




//errors
export const clearErrors = async (dispatch)=>{
dispatch({type: CLEAR_ERRORS})
}