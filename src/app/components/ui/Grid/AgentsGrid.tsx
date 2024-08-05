import { Box, Grid, Button } from "@mui/material";
import { AgentDeatailArrayType } from "../../../interfaces/interfaces";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type AgentsTableProps = {
  agents: AgentDeatailArrayType;
};
export function AgentsGrid({ agents }: AgentsTableProps) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "80vw" }}>
      <Grid container spacing={2}>
        {agents.map((agent) => (
          <>
            <Grid
              item
              xs={2}
              sx={{
                display: { xs: "none", md: "grid" },
                placeContent: "center",
              }}
            >
              <Link
                component={RouterLink}
                to={`/agents/${agent.id}`}
                unstable_viewTransition
                color="inherit"
              >
                <Button variant="outlined" color="inherit">
                  {agent.title}
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "grid", md: "none" },
                placeContent: "center",
              }}
            >
              <Link
                component={RouterLink}
                to={`/agents/${agent.id}`}
                unstable_viewTransition
                color="inherit"
              >
                <Button variant="outlined" color="inherit">
                  {agent.title}
                </Button>
              </Link>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}
