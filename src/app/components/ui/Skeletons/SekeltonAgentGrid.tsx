import { Box, Grid, Skeleton } from "@mui/material";

type SkeletonAgentGridProps = {
  /**  Cantidad de botones que mostrará el skeleton */
  buttons: number;
};

/** Skeleton que reenderiza botones de manera responsive */
export function SkeletonAgentGrid({ buttons }: SkeletonAgentGridProps) {
  const agents: number[] = [];
  for (let i = 0; i < buttons; i++) {
    agents.push(i);
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "80vw" }}>
      <Grid container spacing={2}>
        {agents.map((agent) => (
          <Grid
            key={agent}
            item
            xs={2}
            sx={{
              display: { xs: "none", md: "grid" },
              placeContent: "center",
            }}
          >
            <Skeleton variant="rounded" width={140} height={40} />
          </Grid>
        ))}
        {agents.map((agent) => (
          <Grid
            key={agent + "_mobile"}
            item
            xs={6}
            sx={{
              display: { xs: "grid", md: "none" },
              placeContent: "center",
            }}
          >
            <Skeleton variant="rounded" width={120} height={30} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
