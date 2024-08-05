import { useState } from "react";
import { Typography, Box, TextField, Stack, Pagination } from "@mui/material";
import { Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useQuery } from "@tanstack/react-query";
import { AgentsTable } from "../../components/ui/Table/AgentsTable";
import {
  API_AGENTS_SEARCH,
  AGENT_FIELDS_FILTER,
} from "../../constants/urlsAPI";
import { QUERY_KEY_AGENTS_FILTERED } from "../../constants/queryConstants";

export function Agents() {
  const [findAgent, setFindAgent] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [urlQuery, setUrlQuery] = useState<string>(
    `${API_AGENTS_SEARCH}q=${findAgent}&page=${page}&${AGENT_FIELDS_FILTER}`
  );

  async function fetchFilteredAgent() {
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
    const query = `${API_AGENTS_SEARCH}q=${findAgent}&page=${"1"}&${AGENT_FIELDS_FILTER}`;
    setPage(1);
    setUrlQuery(query);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
    setUrlQuery(
      `${API_AGENTS_SEARCH}q=${findAgent}&page=${value}&${AGENT_FIELDS_FILTER}`
    );
  };

  const {
    data: agentsFiltered,
    status: statusFiltered,
    error: errorFiltered,
  } = useQuery({
    queryKey: [QUERY_KEY_AGENTS_FILTERED, urlQuery, page],
    queryFn: fetchFilteredAgent,
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
          Agents
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
            label="Find Agent"
            variant="outlined"
            value={findAgent}
            onChange={(e) => setFindAgent(e.target.value)}
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
        {statusFiltered === "pending" && <h2>Loading...</h2>}
        {agentsFiltered && (
          // Tabla
          <>
            <AgentsTable agents={agentsFiltered.data} />
            <Stack spacing={4} sx={{ p: 4 }}>
              <Pagination
                count={agentsFiltered.pagination.total_pages}
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
