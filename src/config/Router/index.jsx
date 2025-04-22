import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { routeConfig } from "../../helpers/Route";
import Layout from "../../components/Shared/Layout";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.authUserDetails.isAuthenticated);

  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/tasklist" replace /> : <LoginPage />} />
        {routeConfig.map(({ path, component, isProtectedRoute, isLayoutNeeded }, index) => (
          <Route
            key={index}
            path={path}
            element={
              isProtectedRoute ? (
                <ProtectedRoute>
                  {isLayoutNeeded ? <Layout>{component}</Layout> : <>{component}</>}
                </ProtectedRoute>
              ) : (
                <Route to="/" element={<LoginPage />} />
              )
            }
          />
        ))}

      </Routes>
    </div>
  )
}

export default AppRouter;