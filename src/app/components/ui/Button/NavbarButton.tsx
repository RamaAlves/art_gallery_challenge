import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavbarButtonProps {
  /**
   * Objeto que contiene el nombre de la seccion y la ruta a la que debe hacer referencia.
   */
  page: {
    section: string;
    path: string;
  };
  /**
   * la ruta actual de la pagina.
   */
  locationPath: string;
}
/**
 * Boton de la barra de navegación.
 */
export function NavbarButton({ page, locationPath }: NavbarButtonProps) {
  /** Valida si la ruta actual coincide con la ruta del boton*/
  const isActive = locationPath === page.path;

  return (
    <Button
      component={RouterLink}
      to={page.path}
      unstable_viewTransition
      sx={{
        my: 2,
        color: "white",
        display: "block",
        textDecoration: "underline",
      }}
      style={
        isActive ? { textDecoration: "underline" } : { textDecoration: "none" }
      }
    >
      {page.section}
    </Button>
  );
}
