import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Banner de la aplicacion
 */
export function Banner() {
  return (
    <BoxCustom
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        height: { xs: 80, md: 160 }, // altura del banner
        width: "100%", // ancho del banner
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TypographyCustom
            variant="h2"
            sx={{
              display: { xs: "none", md: "block", fontWeight: "bold" },
            }}
            /* color="primary.dark" */
            align="center"
          >
            YOUR FAVORITE ART GALLERY
          </TypographyCustom>
          <TypographyCustom
            variant="h6"
            sx={{ display: { xs: "block", md: "none" } }}
            /* color="primary" */
            align="center"
          >
            YOUR FAVORITE ART GALLERY
          </TypographyCustom>
        </Grid>
      </Grid>
    </BoxCustom>
  );
}

export default Banner;

const BoxCustom = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.dark
      : theme.palette.primary.light,
}));

const TypographyCustom = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.contrastText
      : theme.palette.primary.contrastText,
}));
