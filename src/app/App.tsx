import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useColorMode } from "../app/hooks/useColorMode.ts";

const router = createBrowserRouter(routes, {
  basename: "/",
});
// Create a client
const queryClient = new QueryClient();

export function App(): JSX.Element {
  const colorMode = useColorMode();
  const darkMode = colorMode?.darkMode ?? false;

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1b2d4a",
      },
      secondary: {
        main: "#ad8d38",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
