import { Box, Grid, Button } from "@mui/material";
import { AgentDeatailArrayType } from "../../../interfaces/interfaces";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type AgentsTableProps = {
  /**
   * Array de agentes a mostrar
   */
  agents: AgentDeatailArrayType;
};
/** Muestra botones con nombres de agentes y redirigen hacia la vista detallada del agente */
export function AgentsGrid({ agents }: AgentsTableProps) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "80vw" }}>
      <Grid container spacing={2}>
        {agents.map((agent) => (
          <Grid
            key={agent.id}
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
        ))}
        {agents.map((agent) => (
          <Grid
            key={agent.id + "_mobile"}
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
        ))}
      </Grid>
    </Box>
  );
}
