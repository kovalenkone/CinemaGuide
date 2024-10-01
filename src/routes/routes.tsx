import { ReactNode } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components";
import { HomePage } from "../pages";

interface RouteType {
  path: string
  element: ReactNode
  metaTitle?: string
}

const routeMap: RouteType[] = [
  { path: '/', element: <HomePage /> }
]

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    {routeMap.map(route => (
      <Route path={route.path} element={route.element} />
    ))}
  </Route>
);

export const router = createBrowserRouter(routes)