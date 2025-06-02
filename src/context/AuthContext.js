import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        user: null,
    });

    const [loading, setLoading] = useState(true); // To wait before rendering children

    const login = (authData) => {
        setAuthState({
            token: authData.accessToken,
            user: authData.user,
        });
    };

    const logout = async () => {
        try {
            await axios.post("https://takudzwa-portfolio-api.onrender.com/api/auth/logout", {}, {
                withCredentials: true,
            });

            setAuthState({ token: null, user: null });
        } catch (err) {
            // console.log("Logout error:", err);
            console.log("Logout error:");
        }
    };

    // Refresh token on mount
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get("https://takudzwa-portfolio-api.onrender.com/api/auth/refresh", {
                    withCredentials: true,
                });

                const { accessToken, user } = response.data;

                setAuthState({ token: accessToken, user });
            } catch (err) {
                // console.log("User not logged in:", err.response?.data?.message || err.message);
                console.log("Login Required:");
            } finally {
                setLoading(false); // Done checking login status
            }
        };

        verifyUser();
    }, []);

    return (
        <AuthContext.Provider value={{ accessToken: authState.token, currentUser: authState.user, login, logout }}>
            {!loading && children} {/* only render children after refresh check */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;