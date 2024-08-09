import { Container } from "@mui/material";
import { NavbarButton } from "../../components/ui/Button/NavbarButton";
/**
 * Retorna la vista de error
 */
export function ErrorPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>ERROR!</i>
      </p>
      <NavbarButton page={{ section: "Go back", path: "/" }} locationPath="/" />
    </Container>
  );
}
