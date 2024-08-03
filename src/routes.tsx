import { MainLayout } from "./app/layout/MainLayout";
import { ErrorPage } from "./app/screens/ErrorPage/ErrorPage";
import { Home } from "./app/screens/Home/Home";
import { Artworks } from "./app/screens/Artwork/Artworks";
import { ArtworkDetail } from "./app/screens/Artwork/ArtworkDetail/ArtworkDetail";
import { Agents } from "./app/screens/Agent/Agents";
import { AgentDetail } from "./app/screens/Agent/AgentDetail/AgentDetail";

export const routes = [
  {
    id: "main",
    element: MainLayout(),
    errorElement: ErrorPage(),
    children: [
      { path: "/", element: Home() },
      { path: "/artworks", element: Artworks() },
      { path: "/artworks/:id", element: ArtworkDetail() },
      { path: "/agents", element: Agents() },
      { path: "/agents/:id", element: AgentDetail() },
    ],
  },
];
