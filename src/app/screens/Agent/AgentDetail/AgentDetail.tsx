import { useEffect, useState } from "react";
import {
  API_AGENTS,
  AGENT_FIELDS_FILTER,
  API_ARTWORKS_SEARCH,
  ARTWORK_FIELDS_FILTER,
} from "../../../constants/urlsAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  QUERY_KEY_AGENT_DETAIL,
  QUERY_KEY_ARTWORKS_FILTERED_BY_AGENT,
} from "../../../constants/queryConstants";
import { Box, Typography, Divider, Pagination, Stack } from "@mui/material";
import { Gallery } from "../../../components/ui/Gallery/Gallery";
import { SkeletonGallery } from "../../../components/ui/Skeletons/SkeletonGallery";
import { SkeletonAgentDetail } from "../../../components/ui/Skeletons/SkeletonAgentDetail";

/**
 * Retorna la vista detallada de un agente.
 * Muestra la informacion del agente y las obras de arte relacionadas.
 * Obtiene el id del agente de los parametros de la url y con ellos recupera los detalles del agente de la API.
 * Luego, en otra consulta se recupera las obras de arte relacionadas al agente detallado.
 */
export function AgentDetail() {
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [agent_name, setAgentName] = useState<string>("");
  //url query for artworks filtered by agent
  const [urlQueryArtworksFiltered, setUrlQueryArtworksFiltered] =
    useState<string>(
      `${API_ARTWORKS_SEARCH}q=${agent_name}&page=${page}&${ARTWORK_FIELDS_FILTER}`
    );

  //fetch agent
  async function fetchAgent() {
    const res = await fetch(`${API_AGENTS}/${id}?${AGENT_FIELDS_FILTER}`);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    setAgentName(json.data.title);
    return json;
  }

  //fetch artworks filtered by agent
  async function fetchFilteredArtworksByAgent() {
    console.log(urlQueryArtworksFiltered);
    const res = await fetch(urlQueryArtworksFiltered);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }

  //pagination handleChange
  useEffect(() => {
    setUrlQueryArtworksFiltered(
      `${API_ARTWORKS_SEARCH}q=${agent_name}&page=${page}&limit=8&${ARTWORK_FIELDS_FILTER}`
    );
  }, [page, agent_name]);

  //useQuery for agent
  const {
    data: agent,
    status: agentStatus,
    error: agentError,
  } = useQuery({
    queryKey: [QUERY_KEY_AGENT_DETAIL, id],
    queryFn: fetchAgent,
  });

  //useQuery for artworks filtered by agent
  const {
    data: artworksFiltered,
    status: statusFiltered,
    error: errorFiltered,
  } = useQuery({
    queryKey: [
      QUERY_KEY_ARTWORKS_FILTERED_BY_AGENT,
      id,
      urlQueryArtworksFiltered,
    ],
    queryFn: fetchFilteredArtworksByAgent,
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
      {agentError && <h2>{agentError.message}</h2>}
      {/* Skeletons while status pending */}
      {agentStatus === "pending" && <SkeletonAgentDetail />}
      {agent && (
        <>
          <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
            {agent.data.title}
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
              {agent.data.birth_date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              -
            </Typography>
            <Typography variant="body1" gutterBottom>
              {agent.data.death_date}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ px: { xs: 2, md: 6, lg: 8, xl: 12 } }}
          >
            {agent.data.description ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: agent.data.description,
                }}
              ></p>
            ) : (
              "No description"
            )}
          </Typography>
          <Divider component="br" />
          <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
            Artworks related
          </Typography>
          <>
            {errorFiltered && <h2>{errorFiltered.message}</h2>}
            {statusFiltered === "pending" && (
              <SkeletonGallery
                images={8}
                columns={1}
                gap={6}
                height={600}
                columnsMd={4}
                gapMd={16}
                heightMd={300}
              />
            )}
            {artworksFiltered && (
              <>
                <Gallery
                  images={artworksFiltered.data}
                  configImages={artworksFiltered.config.iiif_url}
                  columns={1}
                  gap={6}
                  height={600}
                  columnsMd={4}
                  gapMd={16}
                  heightMd={300}
                />
                {/* <ArtworksTable artworks={artworksFiltered.data} /> */}
                <Stack spacing={4} sx={{ p: 4 }}>
                  <Pagination
                    count={artworksFiltered.pagination.total_pages}
                    page={page}
                    onChange={(
                      e: React.ChangeEvent<unknown>,
                      value: number
                    ) => {
                      e.preventDefault(), setPage(value);
                    }}
                  />
                </Stack>
              </>
            )}
          </>
        </>
      )}
    </Box>
  );
}
