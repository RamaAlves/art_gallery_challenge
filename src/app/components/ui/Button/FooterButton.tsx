import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface FooterButtonProps {
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
 * Link del footer. Permite navegacion en la página.
 */
export function FooterButton({ page, locationPath }: FooterButtonProps) {
  /** Valida si la ruta actual coincide con la ruta del boton*/
  const isActive = locationPath === page.path;

  return (
    <Link
      component={RouterLink}
      sx={{ color: "white" }}
      to={page.path}
      color="primary"
      style={
        isActive ? { textDecoration: "underline" } : { textDecoration: "none" }
      }
    >
      {page.section}
    </Link>
  );
}
