import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS,  UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS,  UPDATE_PASSWORD_FAIL,FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL

} from '../constaints/userConstants'

import axios from 'axios'


//LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.post(
            `/api/v1/login`,
            { email, password },
            config
        );

        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}


//REGISTER

export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST });
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }; //multipart/form-data instead of json type, because in registration images also included

        const { data } = await axios.post(`/api/v1/register`, userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
        console.log('userData', userData.user)
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message })

    }
}


//LOAD USER - getUserDetails in backend

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get(`/api/v1/me`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })

    }
}


//LOGOUT USER

export const logoutUser = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`);
        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message })

    }
}

// UPDATE PROFILE

export const updateProfile = (userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST });
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }; //multipart/form-data instead of json type, because in registration images also included
 
        const { data } = await axios.put(`/api/v1/me/update`, userData, config);
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success })
        console.log('userData', userData.user)
    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data.message })

    }
}


//UPDATE PASSWORD - not working will look into it.
export const updatePassword = (password) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } }; 
 
        const { data } = await axios.put(`/api/v1/password/update`, password, config);
        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success }) 
        console.log('password', password)
    } catch (error) {
        dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.response.data.message })

    }
}


//FORGET PASSWORD

export const forgetPassword= (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGET_PASSWORD_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.post(
            `/api/v1/forget/password`,
             email ,
            config
        );

        dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({ type: FORGET_PASSWORD_FAIL, payload: error.response.data.message })
    }
}


export const resetPassword= (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.put(
            `/api/v1/reset/password/${token}`,
             passwords ,
            config
        );

        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response.data.message })
    }
}



//errors
export const clearErrors = async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}