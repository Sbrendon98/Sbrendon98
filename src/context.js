import { createContext } from "react";
import {useReducer} from 'react'
import { authReducer, initialState } from "./reducer";
const authState = createContext()
const authDispatch = createContext()

export const AuthPlugin = () => {
    const [user, dispatch] = useReducer(authReducer, initialState)
}