import { Gallery } from "../../components/ui/Gallery/Gallery";
import { Box, Link, Button, Divider, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  QUERY_KEY_AGENTS,
  QUERY_KEY_ARTWORKS,
} from "../../constants/queryConstants";
import {
  AGENT_FIELDS_FILTER,
  API_AGENTS,
  API_ARTWORKS,
  ARTWORK_FIELDS_FILTER,
} from "../../constants/urlsAPI";
import { AgentsGrid } from "../../components/ui/Grid/AgentsGrid";

export function Home() {
  async function fetchArtwork() {
    const res = await fetch(`${API_ARTWORKS}?limit=4&${ARTWORK_FIELDS_FILTER}`);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }
  async function fetchAgents() {
    const res = await fetch(`${API_AGENTS}?limit=12&${AGENT_FIELDS_FILTER}`);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }
  const {
    data: artworks,
    status: artworkStatus,
    error: artworkError,
  } = useQuery({
    queryKey: [QUERY_KEY_ARTWORKS],
    queryFn: fetchArtwork,
  });
  const {
    data: agents,
    status: agentsStatus,
    error: agentsError,
  } = useQuery({
    queryKey: [QUERY_KEY_AGENTS],
    queryFn: fetchAgents,
  });
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ alignSelf: "flex-start", ml: { md: 8, lg: 12, xl: 16 } }}
      >
        Artworks
      </Typography>
      {artworkError && <h2>{artworkError.message}</h2>}
      {artworkStatus === "pending" && <h2>Loading...</h2>}
      {artworks && (
        <>
          <Gallery
            images={artworks.data}
            configImages={artworks.config.iiif_url}
            columns={1}
            gap={6}
            height={600}
            columnsMd={4}
            gapMd={16}
            heightMd={300}
          />
          <Divider component="br" />
          <Link
            component={RouterLink}
            to={`/artworks`}
            unstable_viewTransition
            color="inherit"
          >
            <Button variant="contained" color="inherit">
              Show more
            </Button>
          </Link>
          <Divider component="br" />
        </>
      )}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ alignSelf: "flex-start", ml: { md: 8, lg: 12, xl: 16 } }}
      >
        Agents
      </Typography>
      {agentsError && <h2>{agentsError.message}</h2>}
      {agentsStatus === "pending" && <h2>Loading...</h2>}
      {agents && (
        <>
          <AgentsGrid agents={agents.data} />
          <Divider component="br" />
          <Link
            component={RouterLink}
            to={`/agents`}
            unstable_viewTransition
            color="inherit"
          >
            <Button variant="contained" color="inherit">
              Show more
            </Button>
          </Link>
          <Divider component="br" />
        </>
      )}
    </Box>
  );
}
