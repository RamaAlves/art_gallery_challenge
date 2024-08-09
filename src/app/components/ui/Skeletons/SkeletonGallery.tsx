import { Box, ImageList, ImageListItem, Skeleton } from "@mui/material";
type SkeletonGalleryProps = {
  /** Cantidad de skeletons a mostrar */
  images: number;
  /** Numero de columnas en mobile */
  columns: number;
  /** Numero de columnas en desktop */
  columnsMd: number;
  /** Gap en mobile */
  gap: number;
  /** Gap en desktop */
  gapMd: number;
  /** Altura del componente en mobile */
  height: number;
  /** Altura del componente en desktop */
  heightMd: number;
};
/** Skeleton que simula la vista de una galeria de obras de arte mientras se esperan los datos de la API */
export function SkeletonGallery({
  images,
  columns,
  gap,
  height,
  columnsMd,
  gapMd,
  heightMd,
}: SkeletonGalleryProps) {
  const imagesList = [];
  for (let i = 0; i < images; i++) {
    imagesList.push(i);
  }
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
          {imagesList.map((item) => (
            <ImageListItem key={item}>
              <Skeleton variant="rectangular" width={280} height={118} />
              <Skeleton width={280} />
              <Skeleton width="60%" />
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
          {imagesList.map((item) => (
            <ImageListItem key={item}>
              <Skeleton variant="rectangular" width={300} height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
