import { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const isAuthentication = true;

    if(!isAuthentication) {
        <Navigate to="/" replace/>
    }
    return children
}

export default ProtectedRoute