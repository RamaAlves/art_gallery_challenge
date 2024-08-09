import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Typography,
} from "@mui/material";
import { FooterButton } from "../ui/Button/FooterButton";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
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
    <BoxCustom
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        width: "100%" /* 
        bgcolor: "black", */ /* 
        color: "white", */,
      }}
    >
      <ListCustom
        /* component="nav" */
        aria-labelledby="Sections"
        sx={{
          /* bgcolor: "black", */
          color: "white",
          minWidth: 240,
        }}
        subheader={
          <ListSubheaderCustom
            sx={{
              /* bgcolor: "black", */
              color: "white",
            }}
            /* component="div" */
            id="sections"
          >
            Sections
          </ListSubheaderCustom>
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
      </ListCustom>
      <TypographyCustom variant="body2">©️ Copyright</TypographyCustom>
    </BoxCustom>
  );
}

const BoxCustom = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.primary.main,
}));

const ListCustom = styled(List)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.primary.main,
}));

const ListSubheaderCustom = styled(ListSubheader)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.primary.main,
}));
const TypographyCustom = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.contrastText
      : theme.palette.primary.contrastText,
}));
