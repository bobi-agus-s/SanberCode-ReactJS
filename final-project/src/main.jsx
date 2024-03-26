import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/homePages.jsx";
import JobVacancyMain from "./pages/jobVacancyPages.jsx";
import JobDetail from "./pages/jobDetailPages.jsx";

import Dashboard from "./pages/authorization/dashboard.jsx";
import Profil from "./pages/authorization/profil.jsx";
import GantiPassword from "./pages/authorization/gantiPassword.jsx";
import JobVacancy from "./pages/authorization/jobVacancy.jsx";
import JobVacancyCreate from "./pages/authorization/jobVacancyCreate.jsx";
import JobVacancyEdit from "./pages/authorization/jobVacancyEdit.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import Cookies from "js-cookie";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/job-vacancy",
        element: <JobVacancyMain />,
    },
    {
        path: "/job-vacancy/:id",
        element: <JobDetail />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/dashboard/profil",
        element: <Profil />,
    },
    {
        path: "/dashboard/list-job-vacancy",
        element: <JobVacancy />,
    },
    {
        path: "/dashboard/list-job-vacancy/create",
        element: <JobVacancyCreate />,
    },
    {
        path: "/dashboard/list-job-vacancy/edit/:id",
        element: <JobVacancyEdit />,
    },
    {
        path: "/dashboard/change-password",
        element: <GantiPassword />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
