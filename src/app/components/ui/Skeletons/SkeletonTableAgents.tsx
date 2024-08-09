import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableRow,
  TableHead,
  Skeleton,
} from "@mui/material";

type SkeletonProps = {
  /** Cantidad de filas que mostrará el skeleton */
  rows: number;
};

/** Skeleton que reenderiza una tabla de agentes mientras se esperan los datos de la API */
export function SkeletonTableAgents({ rows }: SkeletonProps) {
  const agents = [];
  for (let i = 0; i < rows; i++) {
    agents.push(i);
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
          {agents.map((agent) => (
            <TableRow key={agent}>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
