import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableRow,
  TableHead,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Loupe as LoupeIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import {
  AgentDeatailArrayType,
  AgentDeatailType,
} from "../../../interfaces/interfaces";

type AgentsTableProps = {
  agents: AgentDeatailArrayType;
};

export function AgentsTable({ agents }: AgentsTableProps) {
  function createAgentDescription(agent: AgentDeatailType) {
    return { __html: agent.description || "" };
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Birth date</TableCell>
            <TableCell>Death date</TableCell>
            <TableCell>Is Artist</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>More details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agents.length === 0 && (
            <TableRow>
              <TableCell>No results</TableCell>
            </TableRow>
          )}
          {agents.map((agent) => (
            <TableRow key={agent.id} sx={{}}>
              <TableCell component="th" scope="row">
                {agent.title ? agent.title : "No name"}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.description ? (
                  <p
                    dangerouslySetInnerHTML={createAgentDescription(agent)}
                  ></p>
                ) : (
                  "No description"
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.birth_date
                  ? agent.birth_date
                  : "No birth date specified"}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.death_date ? agent.death_date : " - "}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.is_artist ? (
                  <CheckCircleIcon sx={{ color: green[500] }} />
                ) : (
                  <CancelIcon sx={{ color: red[500] }} />
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {agent.is_artist ? (
                  <Link
                    to={`/agents/${agent.id}`}
                    component={RouterLink}
                    unstable_viewTransition
                    color="inherit"
                  >
                    <LoupeIcon />
                  </Link>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
