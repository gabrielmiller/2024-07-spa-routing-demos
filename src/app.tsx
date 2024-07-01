import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";

const router = createBrowserRouter([
    {
        children: [
            {
                element: <div>Home</div>,
                path: "/",
            },
            {
                element: <div>Books</div>,
                path: "/books",
            },
            {
                element: <div>Profile</div>,
                path: "/profile",
            },
        ],
        element: <>
            <Header />
            <Outlet />
        </>,
        path: "/",
    },
]);

createRoot(document.getElementById("app-mount")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);