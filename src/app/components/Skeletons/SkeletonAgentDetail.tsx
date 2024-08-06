import { Box, Divider, Typography, Skeleton } from "@mui/material";
import { SkeletonGallery } from "./SkeletonGallery";
export function SkeletonAgentDetail() {
  return (
    <>
      <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
        <Skeleton sx={{ width: { xs: 240, md: 600 } }} />
      </Typography>
      <Divider component="hr" sx={{ width: { xs: "90vw", md: "80vw" } }} />
      <Divider component="br" />
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="body1" gutterBottom>
          <Skeleton width="20px" />
        </Typography>
        <Typography variant="body1" gutterBottom>
          -
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Skeleton width="20px" />
        </Typography>
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ px: { xs: 2, md: 6, lg: 8, xl: 12 } }}
      >
        <Skeleton
          sx={{ width: { xs: 300, md: 800, lg: 1000, xl: 1200 } }}
          height={400}
        />
      </Typography>
      <Divider component="br" />
      <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
        Artworks related
      </Typography>
      <SkeletonGallery
        images={8}
        columns={1}
        gap={6}
        height={600}
        columnsMd={4}
        gapMd={16}
        heightMd={300}
      />
    </>
  );
}
