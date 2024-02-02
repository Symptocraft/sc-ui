import { Navigate, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import { getUserData } from "./utils/userData";
import Dashboard from "./pages/dashboard";

function AppRoutes () {
    const User = getUserData();

    if(!User.token || User.token === null){
        return (
            <Route path="*" element={<LoginPage />} key="Login" />
        );
    }
    
    const routes = [
        <Route path="/dashboard" element={<Dashboard />} key="Dashboard" />,
        <Route path="*" element={<Navigate to="/dashboard" />} key="Dashboard" />
    ];
    return routes;
}

export default AppRoutes;