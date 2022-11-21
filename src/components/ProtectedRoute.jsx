import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children, currentUser, redirectPath, isAllowed }) {
    if (!currentUser || !isAllowed) {
        return <Navigate replace to={redirectPath} />;
    }

    return children ? children : <Outlet />;
}
