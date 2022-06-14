import React from "react";
import { userContext } from "./context";
import { useContext } from "react";



export const Login = () => {
    const { login } = useContext(userContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(userInfo)
        login(userInfo)
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="loginForm">
                    <input type="text" id="email" placeholder="Email" />
                    <input type="text" id="password" placeholder="Password" />
                    <button type="Submit">LogIn</button>
                </div>
            </form>

        </>

    )
}