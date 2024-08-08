import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import {
  withRouter,
  reactRouterParameters,
  reactRouterOutlet,
  reactRouterOutlets,
} from "storybook-addon-remix-react-router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes"; // Import the reactRouterParameters function
import { ColorModeProvider } from "../src/app/context/ColorModeContext.tsx";
/* snipped for brevity */ /* 
import { routes } from "../src/routes"; */
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Home } from "../src/app/screens/Home/Home.tsx";
import { Artworks } from "../src/app/screens/Artwork/Artworks.tsx";
import { ArtworkDetail } from "../src/app/screens/Artwork/ArtworkDetail/ArtworkDetail.tsx";
import { Agents } from "../src/app/screens/Agent/Agents.tsx";
import { AgentDetail } from "../src/app/screens/Agent/AgentDetail/AgentDetail.tsx";
import { ErrorPage } from "../src/app/screens/ErrorPage/ErrorPage.tsx";
import { initialize, mswLoader } from "msw-storybook-addon";

// Initialize msw-storybook-addon for mock service worker
initialize();

// use queryClient for querys
const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1b2d4a",
    },
    secondary: {
      main: "#ad8d38",
    },
  },
});

// Define the routes for the mock app
export const routes = [
  {
    id: "main",
    errorElement: ErrorPage(),
    children: [
      { path: "/", element: <Home /> },
      { path: "/artworks", element: <Artworks /> },
      { path: "/artworks/:id", element: <ArtworkDetail /> },
      { path: "/agents", element: <Agents /> },
      { path: "/agents/:id", element: <AgentDetail /> },
    ],
  },
];

const preview: Preview = {
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </ThemeProvider>
      </ColorModeProvider>
    ),
    withRouter(),
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: reactRouterOutlets(routes),
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
