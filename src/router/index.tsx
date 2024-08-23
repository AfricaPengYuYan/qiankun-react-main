import { RouteObject } from "@/types/router";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LazyLoad from "./LazyLoad";

export const routerArray: RouteObject[] = [];
const metaRouters = import.meta.glob("./modules/*.tsx");
Object.keys(metaRouters).forEach(item => {
    Object.keys(metaRouters[item]).forEach((key: any) => {
        routerArray.push(...metaRouters[item][key]);
    });
});

export const rootRouter: RouteObject[] = [
    {
        path: "/login",
        element: LazyLoad(React.lazy(() => import("@/pages/Login"))),
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    ...routerArray,
    {
        path: "*",
        element: <Navigate to="/404" />
    }
]

const Router = () => {
    return useRoutes(rootRouter);
};

export default Router;