import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_ARTWORK_DETAIL } from "../../../constants/queryConstants";
import {
  API_ARTWORKS,
  ARTWORK_FIELDS_FILTER,
} from "../../../constants/urlsAPI";
import { Paper, Typography, Divider, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SkeletonArtworkDetail } from "../../../components/ui/Skeletons/SkeletonArtworkDetail";

/**
 * Retorna la vista detallada de una obra de arte.
 * Además de la información de la obra, muestra el autor y las publicaciones relacionadas.
 * El nombre del autor es un enlace que lleva a la vista detallada del autor.
 */
export function ArtworkDetail() {
  const { id } = useParams();

  //states for artwork details
  const [description, setDescription] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [artistDisplay, setArtistDisplay] = useState<string>("");
  const [artistTitle, setArtistTitle] = useState<string>("");
  const [publicationHistory, setPucationHistory] = useState<string>("");
  const [catalogueDisplay, setCatalogueDisplay] = useState<string>("");

  //create html for fields of artwork details
  function createDescription() {
    return { __html: description };
  }
  function createShortDescription() {
    return { __html: shortDescription };
  }

  function createArtistDisplay() {
    return { __html: artistDisplay };
  }

  function createArtistTitle() {
    return { __html: artistTitle };
  }

  function createPublicationHistory() {
    return { __html: publicationHistory };
  }

  function createCatalogueDisplay() {
    return { __html: catalogueDisplay };
  }

  async function fetchArtwork() {
    const res = await fetch(`${API_ARTWORKS}/${id}?${ARTWORK_FIELDS_FILTER}`);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }
  const {
    data: artwork,
    status: artworkStatus,
    error: artworkError,
  } = useQuery({
    queryKey: [QUERY_KEY_ARTWORK_DETAIL, id],
    queryFn: fetchArtwork,
  });

  useEffect(() => {
    if (artwork) {
      setDescription(artwork.data.description);
      setShortDescription(artwork.data.short_description);
      setArtistDisplay(artwork.data.artist_display);
      setArtistTitle(artwork.data.artist_title);
      setPucationHistory(artwork.data.publication_history);
      setCatalogueDisplay(artwork.data.catalogue_display);
    }
  }, [artwork]);
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
      {artworkStatus === "pending" && <SkeletonArtworkDetail />}
      {artwork && (
        <>
          <Typography variant="h3" gutterBottom sx={{ alignSelf: "center" }}>
            {artwork.data.title}
          </Typography>
          <Divider component="hr" sx={{ width: { xs: "90vw", md: "80vw" } }} />
          <Divider component="br" />
          <Paper variant="elevation" elevation={3} sx={{ p: 2, pb: 1 }}>
            <img
              srcSet={`${artwork.config.iiif_url}/${artwork.data.image_id}/full/200,/0/default.jpg 200w, ${artwork.config.iiif_url}/${artwork.data.image_id}/full/400,/0/default.jpg 400w, ${artwork.config.iiif_url}/${artwork.data.image_id}/full/843,/0/default.jpg 843w`}
              sizes="(min-width: 1640px) 843px, (min-width: 1200px) 400px, (min-width: 900px) 200px, (min-width: 600px) 90.63vw,  90.63vw"
              alt={artwork.data.title}
              src={artwork.data.thumbnail.lqip}
              style={{ minWidth: "40vw", minHeight: "30vh" }}
              loading="lazy"
            />
          </Paper>
          <Box
            sx={{
              alignSelf: "flex-start",
              width: "100%",
              px: { xs: 0, md: 6, lg: 8, xl: 12 },
              overflow: "auto",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Description:
            </Typography>

            <Typography
              variant="body1"
              sx={{ maxWidth: "80vw", mx: "auto" }}
              gutterBottom
            >
              {artwork.data.description ? (
                <div dangerouslySetInnerHTML={createDescription()} />
              ) : artwork.data.short_description ? (
                <p dangerouslySetInnerHTML={createShortDescription()}></p>
              ) : (
                "No description"
              )}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Details:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {artwork.data.artist_display ? (
                artwork.data.artist_id ? (
                  <Link
                    to={`/agents/${artwork.data.artist_id}`}
                    component={RouterLink}
                    unstable_viewTransition
                    color="inherit"
                  >
                    <p
                      style={{ whiteSpace: "pre" }}
                      dangerouslySetInnerHTML={createArtistDisplay()}
                    ></p>
                  </Link>
                ) : (
                  <p
                    style={{ whiteSpace: "pre" }}
                    dangerouslySetInnerHTML={createArtistDisplay()}
                  ></p>
                )
              ) : artwork.data.artist_title ? (
                artwork.data.artist_id ? (
                  <Link
                    to={`/agents/${artwork.data.artist_id}`}
                    component={RouterLink}
                    unstable_viewTransition
                    color="inherit"
                  >
                    <p dangerouslySetInnerHTML={createArtistTitle()}></p>
                  </Link>
                ) : (
                  <p dangerouslySetInnerHTML={createArtistTitle()}></p>
                )
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
                  <p dangerouslySetInnerHTML={createPublicationHistory()}></p>
                </>
              ) : artwork.data.catalogue_display ? (
                <>
                  Publications:
                  <p dangerouslySetInnerHTML={createCatalogueDisplay()}></p>
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
