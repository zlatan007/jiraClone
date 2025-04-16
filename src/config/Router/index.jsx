import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { routeConfig } from "../../helpers/Route";
import Layout from "../../components/Shared/Layout";

const AppRouter = () => {
  const isAuthentication = false;
  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthentication ? <Navigate to="/taskList" replace /> : <LoginPage />} />
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