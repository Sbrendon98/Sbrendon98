import React, {createContext, useState} from 'react'



export const userContext = createContext({ userName: '', passWord: '', auth: false })

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: '', pass: '', auth: false})
  
    console.log("User Context--->", user)
    const login = (user) => {
        console.log("User Parameter------>",user)
        if (user.email == "devops@electricenjin.com" && user.password == "password55") {
            setUser((user) => ({
                email: user.email,
                pass: user.pass,
                auth: true
            }))
            
            console.log("User Context After--->", user)
            console.log("Success")
        } else {
            alert("Wrong Username or Password")
        }
    }
    return (
        <userContext.Provider value={{ user, login }} >
            {children}
        </userContext.Provider>
    )
}