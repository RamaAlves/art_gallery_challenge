import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../../../../app/components/ui/Gallery/Gallery";

const meta = {
  title: "UI/Gallery",
  component: Gallery,
  tags: ["autodocs"],
} satisfies Meta<typeof Gallery>;

export default meta;

type Story = StoryObj<typeof meta>;

const imageIdDemo = "d55b0cfc-0716-d6cd-3b38-5742903ce046";

const image = {
  id: 1,
  title: "title", // e.g. "The Bath"
  thumbnail: {
    lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAACwmHCwmHTQrHzMsHTQsHjUsHzUtHy0oIDYxIDkyITk0Iz80I0E3JkE2J0I6JUg5J0E2KEY6KUI6LEo+LQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIIAMBOMYwjNFSwBJSVMcSggAOw==",
    width: 123,
    height: 123,
    alt_text: "alt_text",
  },
  date_display: "1890–91", // e.g. "1890–91"
  artist_display:
    "Mary Cassatt (American, 1844-1926)\nprinted with Leroy (French, active 1876-1900)", //  e.g. "Mary Cassatt (American, 1844-1926)\nprinted with Leroy (French, active 1876-1900)" Nombre del artista y su nacionalidad
  artist_title: "Pablo Picasso", // e.g. "Pablo Picasso" nombre del artista
  artist_id: 1, // e.g. 1
  place_of_origin: "United States", // e.g. "United States"
  artwork_type_title: "Painting", // e.g. "Painting" Tipo de obra
  image_id: imageIdDemo,
  short_description: "short_description",
  description: "long_description",
  publication_history: "Lista exaustiva de los lugares publicados", // e.g. Lista exaustiva de los lugares publicados
  catalogue_display: "Breeskin 1970, no. 1", // e.g. "Breeskin 1970, no. 1" Lista de lugares publicados
  medium_display:
    "Color drypoint, aquatint and softground etching from two plates, printed à la poupée, on ivory laid paper", // e.g. "Color drypoint, aquatint and softground etching from two plates, printed à la poupée, on ivory laid paper" Sustancias o materiales usados
  dimensions:
    "Image/plate: 32.1 × 24.7 cm (12 11/16 × 9 3/4 in.); Sheet: 43.6 × 30 cm (17 3/16 × 11 13/16 in.)", // e.g. "Image/plate: 32.1 × 24.7 cm (12 11/16 × 9 3/4 in.); Sheet: 43.6 × 30 cm (17 3/16 × 11 13/16 in.)" medidas
};

export const InHome: Story = {
  args: {
    images: [image, image, image, image],
    configImages: "https://www.artic.edu/iiif/2",
    columns: 1,
    columnsMd: 4,
    gap: 6,
    gapMd: 16,
    height: 600,
    heightMd: 300,
  },
};
export const InAgentDetail: Story = {
  args: {
    images: [image, image, image, image, image, image, image, image],
    configImages: "https://www.artic.edu/iiif/2",
    columns: 1,
    columnsMd: 4,
    gap: 6,
    gapMd: 16,
    height: 600,
    heightMd: 300,
  },
};
