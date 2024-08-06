import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Search } from "@mui/icons-material";
import { Box, Typography, Pagination, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { ArtworksTable } from "../../components/ui/Table/ArtworksTable";
import { SkeletonTableArtworks } from "../../components/Skeletons/SkeletonTableArtworks";
import { SkeletonPagination } from "../../components/Skeletons/SkeletonPagination";
import {
  API_ARTWORKS_SEARCH,
  ARTWORK_FIELDS_FILTER,
} from "../../constants/urlsAPI";
import { QUERY_KEY_ARTWORKS_FILTERED } from "../../constants/queryConstants";

export function Artworks() {
  //set limit of artworks per page
  const limit = 10;
  const [findArtwork, setFindArtwork] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [urlQuery, setUrlQuery] = useState<string>(
    `${API_ARTWORKS_SEARCH}q=${findArtwork}&page=${page}&limit=${limit}&${ARTWORK_FIELDS_FILTER}`
  );

  async function fetchFilteredArtwork() {
    const res = await fetch(urlQuery);
    const json = await res.json();
    if (json.error == "Not Found") {
      throw new Error(json);
    }
    console.log(json);
    return json;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = `${API_ARTWORKS_SEARCH}q=${findArtwork}&page=${"1"}&limit=${limit}&${ARTWORK_FIELDS_FILTER}`;
    setPage(1);
    setUrlQuery(query);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
    setUrlQuery(
      `${API_ARTWORKS_SEARCH}q=${findArtwork}&page=${value}&limit=${limit}&${ARTWORK_FIELDS_FILTER}`
    );
  };

  const {
    data: artworksFiltered,
    status: statusFiltered,
    error: errorFiltered,
  } = useQuery({
    queryKey: [QUERY_KEY_ARTWORKS_FILTERED, urlQuery, page],
    queryFn: fetchFilteredArtwork,
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
      <Box
        sx={{
          display: "flex",
          alignSelf: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "none", md: 4 },
          p: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ alignSelf: "flex-start", ml: { md: 8, lg: 12, xl: 16 } }}
        >
          Artworks
        </Typography>
        <Box
          component="form"
          sx={{
            /* "& > :not(style)": { my: 1, mx: { xs: 0, md: 1 }, width: "25ch" }, */
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          onBlur={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Find Artwork"
            variant="outlined"
            value={findArtwork}
            onChange={(e) => setFindArtwork(e.target.value)}
          />
          <LoadingButton
            loading={statusFiltered === "pending" ? true : false}
            variant="contained"
          >
            <Search />
          </LoadingButton>
        </Box>
        <Typography sx={{ alignSelf: { xs: "flex-start", md: "center" } }}>
          Page: {page}
        </Typography>
      </Box>
      <>
        {errorFiltered && <h2>{errorFiltered.message}</h2>}
        {statusFiltered === "pending" && (
          <>
            <SkeletonTableArtworks rows={limit} />
            <SkeletonPagination />
          </>
        )}
        {artworksFiltered && (
          // Tabla
          <>
            <ArtworksTable artworks={artworksFiltered.data} />
            <Stack spacing={4} sx={{ p: 4 }}>
              <Pagination
                count={artworksFiltered.pagination.total_pages}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </>
        )}
      </>
    </Box>
  );
}
