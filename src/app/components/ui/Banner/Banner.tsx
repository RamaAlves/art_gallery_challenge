import { Box, Typography, Grid } from "@mui/material";

/**
 * Banner de la aplicacion
 */
export function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        height: { xs: 80, md: 160 }, // altura del banner
        width: "100%", // ancho del banner
        backgroundColor: "secondary.light",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              display: { xs: "none", md: "block", fontWeight: "bold" },
            }}
            color="primary.dark"
            align="center"
          >
            YOUR FAVORITE ART GALLERY
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: { xs: "block", md: "none" } }}
            color="primary"
            align="center"
          >
            YOUR FAVORITE ART GALLERY
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
