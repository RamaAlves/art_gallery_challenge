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
import { Gallery } from "../../components/ui/Gallery/Gallery";
import { SkeletonGallery } from "../../components/ui/Skeletons/SkeletonGallery";
import { AgentsGrid } from "../../components/ui/Grid/AgentsGrid";
import { Banner } from "../../components/ui/Banner/Banner";
import { SkeletonAgentGrid } from "../../components/ui/Skeletons/SekeltonAgentGrid";

export function Home() {
  const limitArtworks = 4;
  const limitAgents = 12;
  async function fetchArtwork() {
    const res = await fetch(
      `${API_ARTWORKS}?limit=${limitArtworks}&${ARTWORK_FIELDS_FILTER}`
    );
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }
  async function fetchAgents() {
    const res = await fetch(
      `${API_AGENTS}?limit=${limitAgents}&${AGENT_FIELDS_FILTER}`
    );
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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Banner />
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
          sx={{
            alignSelf: { xs: "center", md: "flex-start" },
            ml: { md: 8, lg: 12, xl: 16 },
          }}
        >
          Artworks
        </Typography>
        {artworkError && <h2>{artworkError.message}</h2>}
        {artworkStatus === "pending" && (
          <SkeletonGallery
            images={limitArtworks}
            columns={1}
            gap={6}
            height={600}
            columnsMd={4}
            gapMd={16}
            heightMd={300}
          />
        )}
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
          sx={{
            alignSelf: { xs: "center", md: "flex-start" },
            ml: { md: 8, lg: 12, xl: 16 },
          }}
        >
          Agents
        </Typography>
        {agentsError && <h2>{agentsError.message}</h2>}
        {agentsStatus === "pending" && (
          <SkeletonAgentGrid buttons={limitAgents} />
        )}
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
    </Box>
  );
}
