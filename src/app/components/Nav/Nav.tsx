import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { SwitchTheme } from "../ui/Switch/SwitchTheme";
import { NavbarButton } from "../ui/Button/NavbarButton";

const pages = [
  { section: "Artworks", path: "/artworks" },
  { section: "Agents", path: "/agents" },
];
/** Navbar de la aplicacion.
 * Muestra enlaces hacia las diferentes secciones de la app y el boton para cambiar de tema (esquema de colores)
 * */
export function Nav() {
  const { pathname } = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* icono menu abre el menu */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              /* estado que define si se muestra o no el menu */
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              /* cierra el menu */
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.section} onClick={handleCloseNavMenu}>
                  <Button
                    component={RouterLink}
                    to={page.path}
                    unstable_viewTransition
                    color="inherit"
                  >
                    {page.section}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem>
                <SwitchTheme />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Art Gallery
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Art Gallery
          </Typography>

          <Box
            sx={{
              mr: 12,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 16,
            }}
          >
            {pages.map((page) => (
              <NavbarButton
                key={page.section}
                page={page}
                locationPath={pathname}
              />
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <SwitchTheme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
