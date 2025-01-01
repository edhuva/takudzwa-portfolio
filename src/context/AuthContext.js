import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ Children }) => {
    const [ user, setUser ] = useState('')

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}} >
            { Children }
        </AuthContext.Provider>
    )
}

export default AuthProvider