import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const isAuth = localStorage.getItem("demo_is_auth");

    if (isAuth != "true") {
        return <Navigate to="/login"/>;
    }
    return <Outlet />;
}