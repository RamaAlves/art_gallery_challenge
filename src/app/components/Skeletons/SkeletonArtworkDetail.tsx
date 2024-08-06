import { Box, Divider, Skeleton, Typography } from "@mui/material";
export function SkeletonArtworkDetail() {
  return (
    <>
      <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
        <Skeleton sx={{ width: { xs: 240, md: 600 } }} />
      </Typography>
      <Divider component="hr" sx={{ width: { xs: "90vw", md: "80vw" } }} />
      <Divider component="br" />
      <Skeleton
        variant="rectangular"
        sx={{
          width: { xs: 300, md: 600, xl: 1000 },
        }}
        height={600}
      />
      <Box
        sx={{
          alignSelf: "flex-start",
          ml: { xs: 2, md: 6, lg: 8, xl: 12 },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Description:
        </Typography>

        <Typography variant="body1" gutterBottom>
          <Skeleton />
        </Typography>

        <Typography variant="h5" gutterBottom>
          Details:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Skeleton />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>Place of origin:</p>
          <Skeleton />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>Type:</p>
          <Skeleton />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>Medium display: </p>
          <Skeleton />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>Dimensions: </p>
          <Skeleton />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>Publications:</p>
          <Skeleton
            variant="rectangular"
            sx={{ width: { xs: 280, md: 400, xl: 1000 } }}
          />
        </Typography>
      </Box>
    </>
  );
}
