import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavbarButtonProps {
  page: {
    section: string;
    path: string;
  };
  locationPath: string;
}
export function NavbarButton({ page, locationPath }: NavbarButtonProps) {
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
