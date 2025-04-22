import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.authUserDetails.isAuthenticated);

    console.log("isAuthenticated", isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    } else {
        return children
    }
}

export default ProtectedRoute