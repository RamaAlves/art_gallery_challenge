import { Box, Skeleton } from "@mui/material";

export function SkeletonPagination() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, p: 4 }}>
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
    </Box>
  );
}
