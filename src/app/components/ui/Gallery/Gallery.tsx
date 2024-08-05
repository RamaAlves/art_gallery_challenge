import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArtworkDeatailArrayType } from "../../../interfaces/interfaces";

type GalleryProps = {
  images: ArtworkDeatailArrayType;
  configImages: string;
  columns: number;
  columnsMd: number;
  gap: number;
  gapMd: number;
  height: number;
  heightMd: number;
};

export function Gallery({
  images,
  configImages,
  columns,
  gap,
  height,
  columnsMd,
  gapMd,
  heightMd,
}: GalleryProps) {
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: { height },
          overflow: "auto",
        }}
      >
        <ImageList
          sx={{
            width: {
              xs: 300,
              sm: 560,
              md: 800,
              lg: 1100,
              xl: "100%",
            },
            height: { height },
            overflow: "auto",
          }}
          cols={columns}
          gap={gap}
        >
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <img
                style={{
                  objectFit: "scale-down",
                  maxWidth: "80vw",
                }}
                srcSet={`${configImages}/${item.image_id}/full/200,/0/default.jpg 200w, ${configImages}/${item.image_id}/full/400,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x 400w, ${configImages}/${item.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x 843w`}
                src={`${
                  item.thumbnail
                    ? item.thumbnail?.lqip
                    : `${configImages}/${item.image_id}/full/200,/0/default.jpg`
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
                sizes="(min-width: 1640px) 843px, (min-width: 1200px) 843px, (min-width: 900px) 843px, (min-width: 600px) 90.63vw,  90.63vw"
                alt={item.thumbnail ? item.thumbnail.alt_text : item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ overflow: "auto", maxWidth: "80vw" }}
                title={item.title}
                subtitle={<span>by: {item.artist_title}</span>}
                position="below"
              />
              <Link
                to={`/artworks/${item.id}`}
                component={RouterLink}
                unstable_viewTransition
                color="inherit"
              >
                More details
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          height: { heightMd },
          overflow: "auto",
        }}
      >
        <ImageList
          sx={{
            width: {
              xs: 300,
              sm: 560,
              md: 800,
              lg: 1100,
              xl: "100%",
            },
            height: { heightMd },
            overflow: "auto",
          }}
          cols={columnsMd}
          gap={gapMd}
        >
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <img
                style={{
                  objectFit: "scale-down",
                  maxWidth: "20vw",
                }}
                srcSet={`${configImages}/${item.image_id}/full/200,/0/default.jpg 200w, ${configImages}/${item.image_id}/full/400,/0/default.jpg, ${configImages}/${item.image_id}/full/843,/0/default.jpg`}
                src={`${
                  item.thumbnail
                    ? item.thumbnail?.lqip
                    : `${configImages}/${item.image_id}/full/200,/0/default.jpg`
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
                sizes="(min-width: 1640px) 843px, (min-width: 1200px) 843px, (min-width: 900px) 843px, (min-width: 600px) 90.63vw,  90.63vw"
                alt={item.thumbnail ? item.thumbnail.alt_text : item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ overflow: "auto", maxWidth: "20vw" }}
                title={item.title}
                subtitle={<span>by: {item.artist_title}</span>}
                position="below"
              />
              <Link
                to={`/artworks/${item.id}`}
                component={RouterLink}
                unstable_viewTransition
                color="inherit"
              >
                More details
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
