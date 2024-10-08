export interface ChildrenType {
  children: React.ReactNode;
}

export interface ColorModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ArtworkResponseType {
  data: ArtworkDeatailType;
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
}

export interface ArtworksSearchResponseType {
  preference: null;
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
  };
  data: ArtworkDeatailArrayType;
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
}

export type ArtworkDeatailArrayType = {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  date_display: string | null;
  artist_display: string | null;
  artist_title: string | null;
  artist_id: number | null;
  place_of_origin: string | null;
  artwork_type_title: string | null;
  image_id: string;
  short_description: string | null;
  description: string | null;
  publication_history: string | null;
  catalogue_display: string | null;
  medium_display: string | null;
  dimensions: string | null;
}[];
export interface ArtworkDeatailType {
  id: number;
  title: string; // e.g. "The Bath"
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  date_display: string | null; // e.g. "1890–91"
  artist_display: string | null; //  e.g. "Mary Cassatt (American, 1844-1926)\nprinted with Leroy (French, active 1876-1900)" Nombre del artista y su nacionalidad
  artist_title: string | null; // e.g. "Pablo Picasso" nombre del artista
  artist_id: number | null; // e.g. 1
  place_of_origin: string | null; // e.g. "United States"
  artwork_type_title: string | null; // e.g. "Painting" Tipo de obra
  image_id: string;
  short_description: string | null;
  description: string | null;
  publication_history: string | null; // e.g. Lista exaustiva de los lugares publicados
  catalogue_display: string | null; // e.g. "Breeskin 1970, no. 1" Lista de lugares publicados
  medium_display: string | null; // e.g. "Color drypoint, aquatint and softground etching from two plates, printed à la poupée, on ivory laid paper" Sustancias o materiales usados
  dimensions: string | null; // e.g. "Image/plate: 32.1 × 24.7 cm (12 11/16 × 9 3/4 in.); Sheet: 43.6 × 30 cm (17 3/16 × 11 13/16 in.)" medidas
}

export interface AgentDeatailType {
  id: number;
  title: string; // e.g. "Monet"
  is_artist: boolean;
  birth_date: number | null; // e.g. "1840"
  death_date: number | null; // e.g. "1926"
  description: string | null;
}
export type AgentDeatailArrayType = {
  id: number;
  title: string; // e.g. "Monet"
  is_artist: boolean;
  birth_date: number | null; // e.g. "1840"
  death_date: number | null; // e.g. "1926"
  description: string | null;
}[];
//id,title,is_artist,birth_date,death_date,description
// id,title,thumbnail,date_display,artist_display,artist_title,artist_id,place_of_origin,artwork_type_title,image_id,short_description,description,publication_history,catalogue_display,medium_display,dimensions
