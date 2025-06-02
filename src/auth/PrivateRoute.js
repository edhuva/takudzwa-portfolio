import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
    const { accessToken } = useContext(AuthContext);

    return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;