import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArtworkDeatailArrayType } from "../../../interfaces/interfaces";

type ArtworksTableProps = {
  artworks: ArtworkDeatailArrayType;
};

export function ArtworksTable({ artworks }: ArtworksTableProps) {
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
          {artworks.length === 0 && (
            <TableRow>
              <TableCell>No results</TableCell>
            </TableRow>
          )}
          {artworks.map((artwork) => (
            <TableRow key={artwork.id} sx={{}}>
              <TableCell component="th" scope="row">
                {artwork.title ? artwork.title : "No title"}
              </TableCell>
              <TableCell component="th" scope="row">
                {artwork.short_description ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artwork.short_description,
                    }}
                  ></p>
                ) : (
                  "No description"
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {artwork.artist_title ? (
                  <Link
                    to={`/agents/${artwork.artist_id}`}
                    component={RouterLink}
                    unstable_viewTransition
                    color="inherit"
                  >
                    {artwork.artist_title}
                  </Link>
                ) : (
                  "No artist name"
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {artwork.place_of_origin
                  ? artwork.place_of_origin
                  : "no place specified"}
              </TableCell>
              <TableCell component="th" scope="row">
                {artwork.id}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link
                  to={`/artworks/${artwork.id}`}
                  component={RouterLink}
                  unstable_viewTransition
                  color="inherit"
                >
                  More details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
