import { EXCLUDEDPATHS, HOME_URL } from "@/config/config";
import { APPS } from "@/qiankun";
import { RouteObject } from "@/types/router";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { LayoutIndex } from "./Constant";
import LazyView from "./LazyView";

const generateRoutes = () => {
    const pageModules = import.meta.glob("./../pages/**/*.tsx");

    const routes: RouteObject[] = [
        {
            element: <LayoutIndex />,
            children: []
        }
    ];

    for (const [filePath, module] of Object.entries(pageModules)) {
        const relativePath = filePath.replace(/^\.\.\/pages\//, "").replace(/\.tsx$/, "");
        const lazyComponent = React.lazy(module);
        let routePath = `/${relativePath}`;

        // 如果路径不是根级别且以 "index" 结尾，则移除 "index"
        const pathSegments = routePath.split("/");
        if (pathSegments.length > 2 && pathSegments[pathSegments.length - 1] === "index") {
            pathSegments.pop();
            routePath = pathSegments.join("/");
        }

        const route: Partial<RouteObject> = {
            path: routePath,
            element: LazyView(lazyComponent)
        };

        // 根据列表排除路径
        if (!EXCLUDEDPATHS.includes(routePath)) {
            routes[0].children!.push(route as RouteObject);
        }
    }

    // 添加 Qiankun 子应用的路由
    for (const app of APPS) {
        // 去掉# 前缀
        const id = app.container.replace(/^#/, '');
        routes[0].children!.push({
            path: app.activeRule,
            element: <div id={id}></div>
        });
    }

    return routes;
};

const ROOTROUTER: RouteObject[] = [
    {
        path: "/login",
        element: LazyView(React.lazy(() => import("@/pages/login"))),
    },
    {
        path: "/403",
        element: LazyView(React.lazy(() => import("@/components/ErrorMessage/403"))),
    },
    {
        path: "/404",
        element: LazyView(React.lazy(() => import("@/components/ErrorMessage/404"))),
    },
    {
        path: "/500",
        element: LazyView(React.lazy(() => import("@/components/ErrorMessage/500"))),
    },
    {
        path: "/",
        element: <Navigate to={HOME_URL} />
    },
    {
        path: "*",
        element: <Navigate to="/404" />
    }
]

export const globalRoute = () => {
    const ROUTES = generateRoutes();
    return [...ROOTROUTER, ...ROUTES]
};

const Router = () => {
    return useRoutes(globalRoute());
};

export default Router;