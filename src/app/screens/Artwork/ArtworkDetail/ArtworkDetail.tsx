import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_ARTWORK_DETAIL } from "../../../constants/queryConstants";
import { API_ARTWORKS } from "../../../constants/urlsAPI";
import { Box } from "@mui/material";
import { Paper, Typography, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function ArtworkDetail() {
  const { id } = useParams();
  async function fetchArtwork() {
    const res = await fetch(`${API_ARTWORKS}/${id}`);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }
  const {
    data: artwork,
    status: artworStatus,
    error: artworkError,
  } = useQuery({
    queryKey: [QUERY_KEY_ARTWORK_DETAIL, id],
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
      {artworkError && <h2>{artworkError.message}</h2>}
      {artworStatus === "pending" && <h2>Loading...</h2>}
      {artwork && (
        <>
          <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
            {artwork.data.title}
          </Typography>
          <Divider component="hr" sx={{ width: { xs: "90vw", md: "80vw" } }} />
          <Divider component="br" />
          <Paper variant="outlined">
            <img
              srcSet={`${artwork.config.iiif_url}/${artwork.data.image_id}/full/200,/0/default.jpg 200w, ${artwork.config.iiif_url}/${artwork.data.image_id}/full/400,/0/default.jpg 400w, ${artwork.config.iiif_url}/${artwork.data.image_id}/full/843,/0/default.jpg 843w`}
              sizes="(min-width: 1640px) 843px, (min-width: 1200px) 400px, (min-width: 900px) 200px, (min-width: 600px) 90.63vw,  90.63vw"
              alt={artwork.data.title}
              src={artwork.data.thumbnail.lqip}
            />
          </Paper>
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
              {artwork.data.description ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: artwork.data.description,
                  }}
                ></p>
              ) : artwork.data.short_description ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: artwork.short_description,
                  }}
                ></p>
              ) : (
                "No description"
              )}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Details:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.artist_display ? (
                <Link
                  to={`/agents/${artwork.data.artist_id}`}
                  component={RouterLink}
                  unstable_viewTransition
                  color="inherit"
                >
                  <p
                    style={{ whiteSpace: "pre" }}
                    dangerouslySetInnerHTML={{
                      __html: artwork.data.artist_display,
                    }}
                  ></p>
                </Link>
              ) : artwork.data.artist_title ? (
                <Link
                  to={`/agents/${artwork.data.artist_id}`}
                  component={RouterLink}
                  unstable_viewTransition
                  color="inherit"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.artist_title,
                    }}
                  ></p>
                </Link>
              ) : (
                "No artist name"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.place_of_origin ? (
                <p>Place of origin: {artwork.data.place_of_origin}</p>
              ) : (
                "Place of origin: No specified"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.date_display ? (
                <p>Date: {artwork.data.date_display}</p>
              ) : (
                "Date: No specified"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.artwork_type_title ? (
                <p>Type: {artwork.data.artwork_type_title}</p>
              ) : (
                "Type: No specified"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.medium_display ? (
                <p>Medium display: {artwork.data.medium_display}</p>
              ) : (
                "Medium display: No specified"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.dimensions ? (
                <p>Dimensions: {artwork.data.dimensions}</p>
              ) : (
                "Dimensions: No specified"
              )}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.publication_history ? (
                <>
                  Publications:
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.data.publication_history,
                    }}
                  ></p>
                </>
              ) : artwork.data.catalogue_display ? (
                <>
                  Publications:
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.data.catalogue_display,
                    }}
                  >
                    {artwork.data.catalogue_display}
                  </p>
                </>
              ) : (
                "Publications: No specified"
              )}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
