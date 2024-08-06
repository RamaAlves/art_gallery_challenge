import { Box, ImageList, ImageListItem, Skeleton } from "@mui/material";
type SkeletonGalleryProps = {
  images: number;
  columns: number;
  columnsMd: number;
  gap: number;
  gapMd: number;
  height: number;
  heightMd: number;
};

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
