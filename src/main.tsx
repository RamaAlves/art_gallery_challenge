import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { ColorModeProvider } from "./app/context/ColorModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <CssBaseline enableColorScheme />
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
