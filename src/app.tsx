import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Root element!</div>,
    },
  ]);

createRoot(document.getElementById("app-mount")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);