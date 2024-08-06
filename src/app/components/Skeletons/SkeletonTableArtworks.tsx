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
  rows: number;
};

export function SkeletonTableArtworks({ rows }: SkeletonProps) {
  const artworks = [];
  for (let i = 0; i < rows; i++) {
    artworks.push(i);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Short description</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Place of origin</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>More details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artworks.map((agent) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
