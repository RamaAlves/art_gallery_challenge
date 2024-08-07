import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/** Footer de la aplicación. Muestra las secciones de la aplicacion y permite la navegación  */
export function Footer() {
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
        <ListItem>
          <ListItemText>
            <Link
              component={RouterLink}
              sx={{ color: "white" }}
              to="/"
              color="primary"
            >
              Home
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link
              component={RouterLink}
              to="/artworks"
              sx={{ color: "white" }}
              color="primary"
            >
              Artworks
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link
              component={RouterLink}
              sx={{ color: "white" }}
              to="/agents"
              color="primary"
            >
              Agents
            </Link>
          </ListItemText>
        </ListItem>
      </List>
      <p>©️ Copyright</p>
    </Box>
  );
}
