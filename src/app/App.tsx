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

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1b2d4a",
      },
      secondary: {
        main: "#ad8d38",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#b3aff7",
      },
      secondary: {
        main: "#ad8d38",
      },
    },
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
