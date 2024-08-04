import { Typography } from "@mui/material";
import { Gallery } from "../../components/ui/Gallery/Gallery";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_ARTWORKS } from "../../constants/queryConstants";
import { API_ARTWORKS, ARTWORK_FIELDS_FILTER } from "../../constants/urlsAPI";

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
  const {
    data: artworks,
    status: artworkStatus,
    error: artworkError,
  } = useQuery({
    queryKey: [QUERY_KEY_ARTWORKS],
    queryFn: fetchArtwork,
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
      )}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ alignSelf: "flex-start", ml: { md: 8, lg: 12, xl: 16 } }}
      >
        Agents
      </Typography>
      {console.log(artworks)}
      {/* <Gallery
        images={artworks.data}
        configImages={artworks.config.iiif_url}
        columns={2}
        gap={6}
        height={600}
        columnsMd={5}
        gapMd={16}
        heightMd={300}
      /> */}
    </Box>
  );
}
