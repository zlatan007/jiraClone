import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { routeConfig } from "../../helpers/Route";
import Layout from "../../components/Shared/Layout";

const AppRouter = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route index element={isAuthenticated ? <Navigate to="/tasklist" replace /> : <LoginPage />} />
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
                component
              )
            }
          />
        ))}

      </Routes>
    </div>
  )
}

export default AppRouter;