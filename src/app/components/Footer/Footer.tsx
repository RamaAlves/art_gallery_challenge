import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
} from "@mui/material";
import { FooterButton } from "../ui/Button/FooterButton";
import { useLocation } from "react-router-dom";
/**
 * Footer de la aplicación.
 * Muestra las secciones de la aplicacion y permite la navegación
 */
export function Footer() {
  const { pathname } = useLocation();
  const pages = [
    { section: "Artworks", path: "/artworks" },
    { section: "Agents", path: "/agents" },
    { section: "Home", path: "/" },
  ];
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        width: "100%",
        bgcolor: "black",
        color: "white",
      }}
    >
      <List
        component="nav"
        aria-labelledby="Sections"
        sx={{
          bgcolor: "black",
          color: "white",
          minWidth: 240,
        }}
        subheader={
          <ListSubheader
            sx={{
              bgcolor: "black",
              color: "white",
            }}
            component="div"
            id="sections"
          >
            Sections
          </ListSubheader>
        }
      >
        <Divider sx={{ bgcolor: "white" }} />
        {pages.map((page) => (
          <ListItem key={page.section}>
            <ListItemText>
              <FooterButton page={page} locationPath={pathname} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <p>©️ Copyright</p>
    </Box>
  );
}
