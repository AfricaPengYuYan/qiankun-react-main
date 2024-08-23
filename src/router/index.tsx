import { RouterObject } from "@/types/router";
import { Navigate, useRoutes } from "react-router-dom";

const modules = import.meta.globEager("./modules/*.tsx");

export const routerArray: RouterObject[] = [];

Object.keys(modules).forEach(item => {
    Object.keys(modules[item]).forEach((key: any) => {
        routerArray.push(...modules[item][key]);
    });
});

export const rootRouter: RouterObject[] = [
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