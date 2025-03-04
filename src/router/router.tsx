import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../pages/home";
import { AuthLayout } from "../layouts/auth-layout";
import { Login } from "../pages/auth/login";
import { Signup } from "../pages/auth/signup";
import { NotFound } from "../pages/error/not-found";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="login" replace />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]); 