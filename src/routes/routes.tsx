import { ReactNode } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components";
import { HomePage } from "../pages";
import { appUrls } from "@/constants/urls";
import { uuid } from "@/utils/uuid";
import GenresPage from "@/pages/GenresPage/GenresPage";
import GenrePage from "@/pages/GenrePage/GenrePage";
import MoviePage from "@/pages/MoviePage/MoviePage";

interface RouteType {
  path: string
  element: ReactNode
  metaTitle?: string
}

const routeMap: RouteType[] = [
  { path: appUrls.home, element: <HomePage /> },
  { path: appUrls.genres, element: <GenresPage /> },
  { path: appUrls.genre, element: <GenrePage /> },
  { path: appUrls.movie, element: <MoviePage /> },
]

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    {routeMap.map(route => (
      <Route path={route.path} element={route.element} key={uuid()} />
    ))}
  </Route>
);

export const router = createBrowserRouter(routes)