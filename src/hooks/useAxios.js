import axios from "axios"; 
import { useContext, useRef, useEffect, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";

const useAxios = (navigate) => {
  const { accessToken, currentUser, login, logout } = useContext(AuthContext);
  const accessTokenRef = useRef(accessToken);

  // Keep ref in sync with context
  useEffect(() => {
    accessTokenRef.current = accessToken;
  }, [accessToken]);

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      // baseURL: "http://localhost:3500/api",
      baseURL: "https://takudzwa-portfolio-api.onrender.com/api",
      withCredentials: true,
    });

    instance.interceptors.request.use(
      (config) => {
        if (accessTokenRef.current) {
          config.headers.Authorization = `Bearer ${accessTokenRef.current}`;
          if (!(config.data instanceof FormData)) {
            config.headers["Content-Type"] = "application/json";
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        
        // Only handle 401 errors and avoid infinite retry loops
        if (error?.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          try {
            // Attempt to refresh token
            const response = await axios.get(
              // "http://localhost:3500/api/auth/refresh",
              "https://takudzwa-portfolio-api.onrender.com/api/auth/refresh",
              { withCredentials: true }
            );
            
            const newAccessToken = response.data.accessToken;
            
            // Update context and ref
            login({ accessToken: newAccessToken, user: currentUser });
            accessTokenRef.current = newAccessToken;
            
            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          } catch (refreshError) {
            // If refresh fails, logout and redirect
            logout();
            navigate("/login");
            return Promise.reject(refreshError);
          }
        }
        
        // For non-401 errors or if already retried, reject normally
        return Promise.reject(error);
      }
    );

    return instance;
  }, [login, logout, navigate, currentUser]);

  return axiosInstance;
};

export default useAxios;