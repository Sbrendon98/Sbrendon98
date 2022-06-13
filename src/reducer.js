
import { useReducer } from "react";


let user = localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")).user

let token = localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")).auth_token

export const initialState = {
    userInfo: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
}

export const authReducer(initialState. action.type) {
    switch(action.type) {
        case "LOGIN":
            return {
                ...initialState,
                loading: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading:false
            }
        case "LOGIN_ERROR:
            return {
                ...initialState,
                loading:false,
                errorMessage: action.error;
            }
        default: 
            throw new Error(`Unhandled Action Type ${action.type}`)
    }
}