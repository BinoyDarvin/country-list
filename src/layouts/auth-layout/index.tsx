import { Outlet } from "react-router";

export const AuthLayout = () => {
    return (
        <div>
            <h1>Auth layout</h1>
            <Outlet />
        </div>
    );
};