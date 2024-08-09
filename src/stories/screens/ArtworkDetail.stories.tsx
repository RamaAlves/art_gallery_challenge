import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { ArtworkDetail } from "../../app/screens/Artwork/ArtworkDetail/ArtworkDetail";

const meta = {
  title: "screens/Artwork/ArtworkDetail",
  component: ArtworkDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof ArtworkDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

// Mocked data
const MokedData = {
  data: {
    id: 28560,
    title: "The Bedroom",
    thumbnail: {
      lqip: "data:image/gif;base64,R0lGODlhBgAFAPQAAHhwV3N+bnh/aXR8dJtsG6VsAJx4IIp8PIx0QYZ2SoZ/bIx+b3CGboiAQoKAVoWAVpiLYZqNYIiAcoeIc5SNdJeJfJiKfXyCgneAkXmLp3eFqomMgIWJmZOerAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYoMYEXJdhgwBF1wM4RIE01HYYiVJZk7SEADs=",
      width: 14407,
      height: 11406,
      alt_text:
        "Painting of bedroom, blue walls, green window, tan bed, red bedding.",
    },
    date_display: "1889",
    artist_display: "Vincent van Gogh (Dutch, 1853–1890)",
    place_of_origin: "Saint-Rémy-de-Provence",
    description:
      "<p>Vincent van Gogh so highly esteemed his bedroom painting that he made three distinct versions: the first, now in the collection of the Van Gogh Museum, Amsterdam; the second, belonging to the Art Institute of Chicago, painted a year later on the same scale and almost identical; and a third, smaller canvas in the collection of the Musée d’Orsay, Paris, which he made as a gift for his mother and sister. Van Gogh conceived the first <em>Bedroom</em> in October 1888, a month after he moved into his “Yellow House” in Arles, France. This moment marked the first time the artist had a home of his own, and he had immediately and enthusiastically set about decorating, painting a suite of canvases to fill the walls. Completely exhausted from the effort, he spent two-and-a-half days in bed and was then inspired to create a painting of his bedroom. As he wrote to his brother Theo, “It amused me enormously doing this bare interior. With a simplicity à la Seurat. In ﬂat tints, but coarsely brushed in full impasto, the walls pale lilac, the ﬂoor in a broken and faded red, the chairs and the bed chrome yellow, the pillows and the sheet very pale lemon green, the bedspread blood-red, the dressing-table orange, the washbasin blue, the window green. I had wished to express utter repose with all these very different tones.” Although the picture symbolized relaxation and peace to the artist, to our eyes the canvas seems to teem with nervous energy, instability, and turmoil, an effect heightened by the sharply receding perspective.</p>\n",
    short_description:
      'In 1888, Van Gogh moved into his own home in Arles, France. He dubbed it the “Studio of the South,” hoping that fellow artists would join him there to work. This is one of three versions he painted of his beloved Arles bedroom. While its vivid palette and dramatic perspective seem to burst with nervous vitality, Van Gogh intended the painting "to express utter repose."',
    dimensions:
      "73.6 × 92.3 cm (29 × 36 5/8 in.); Framed: 88.9 × 108 × 8.9 cm (35 × 42 1/2 × 3 1/2 in.)",
    medium_display: "Oil on canvas",
    catalogue_display: null,
    publication_history:
      'Minneapolis Institute of Arts, "Exhibition of French Paintings from a Well-Known Collection," Bulletin of the Minneapolis Institute of Arts, 14, 4 (April 1925), 31–32.\n\nForbes Watson, "A Note on the Birch Bartlett Collection," The Arts 9, no. 6 (June 1926): 303–06 (ill.), 307–13.\n\nR.M.F., “Van Gogh in Arles,” Bulletin of the Art Institute of Chicago 20, no. 7, (October 1926): 92–94.\n\nMuseo del Palacio de Bellas Artes, Rojo mexicano: la grana cochinilla en el arte, exh. cat. (Ciudad de Mexico: Instituto Nacional de Bellas Artes, 2017), 270, 387 fig. 61.\n\nArt Institute of Chicago Annual Report (Chicago: Art Institute of Chicago, 1926), 54 (ill.).\n\nJ[acob]-B[aart] de la Faille, L\'Oeuvre de Vincent van Gogh: catalogue raisonné (Berlin: G. van Ouest, 1928), vol. 1,  138, no. 484; vol. 2, pl. 134. \n\nArt Institute of Chicago, Modern Paintings in the Helen Birch Bartlett Memorial from the Birch-Bartlett Collection (Chicago: Art Institute of Chicago, 1929), 22–23.\n\nVincent van Gogh, Further Letters to His Brother, 1886–1889 (London: Constable and Co., 1929), 234–35, 280, 371–72.\n\nArt Institute of Chicago, A Guide to the Paintings in the Permanent Collection (Chicago: Art Institute of Chicago, 1932), 27 (ill.).\n\nArt Institute of Chicago, A Brief Guide to the Collections (Chicago: Art Institute of Chicago, 1935), 30 (ill.), 31.\n\nW. Scherjon and Jos. de Gruyter, Vincent van Gogh\'s Great Period: Arles, St. Rémy and Auvers sur Oise (Complete Catalog) (Amsterdam: De Spieghel, 1937), 140 (ill.), no. 12.\n\nJ[acob]-B[aart] de la Faille, Vincent van Gogh, trans. Prudence Montagu-Pollock (New York: French and European Publications; Paris: Hyperion, 1938), 362 (ill.), no. 510.\n\nArt Institute of Chicago, Masterpiece of the Month, Notes and Bibliography (Chicago: Art Institute of Chicago, 1938), 18–19 (ill.). \n\nArt Institute of Chicago, A Brief Guide to the Collections (Chicago: Art Institute of Chicago, 1941), 36 (ill.), 37.\n\nArt Institute of Chicago, A Brief Guide to the Collections (Chicago: Art Institute of Chicago, 1945), 40 (ill.).\n\nArt Institute of Chicago, Modern Paintings in the Helen Birch Bartlett Memorial from the Birch-Bartlett Collection (Chicago: Art Institute of Chicago, 1946), 18–19 (ill.).\n\nLouis Hautecoeur, Van Gogh (Monaco: Les Documents d\'Art, 1946), 78, 144.\n\nEgbert Jacobson, Basic Color (Paul Theobald, 1948),174–76 (ill.).\n\nArt Institute of Chicago, A Brief Guide to the Collections (Chicago: Art Institute of Chicago, 1948), p. 37 (ill.).\n\nMeyer Schapiro, Vincent van Gogh, The Library of Great Painters (New York: Harry N. Abrams, 1950), 78–79 (ill.).\n\nCharles Fabens Kelley, “Chicago: record years,” Art News 51, no. 4 (June–August 1952): 52–65, 106–08, 109 (ill.), 110–11.\n\nLawrence and Elisabeth Hanson, Passionate Pilgrim: The Life of Vincent Van Gogh (New York: Random House, 1955), 209–10.\n\nArt Institute of Chicago, A Brief Guide to the Collections (Chicago: Art Institute of Chicago, 1956), 36 (ill.).\n\nArt Institute of Chicago, Paintings in the Art Institute of Chicago: A Catalogue of the Picture Collection (Chicago: Art Institute of Chicago, 1961), 198, 328 (ill.).\n\nFrederick A. Sweet, “Great Chicago Collectors,” Apollo 84 (September 1966): 194, fig. 16, 197.\n\nJacob-Baart de la Faille, The Works of Vincent van Gogh, His Paintings and Drawings (New York: Reynal, 1970), 284 (ill), 285, no. F484.\n\nJohn Maxon, The Art Institute of Chicago (New York: Harry N. Abrams, 1970), 93 (ill.), 94 [repr. 1977, 1987].\n\nPaolo Lecaldano, Tout l\'oeuvre peint de Van Gogh, vol. 2: 1888–1890, trans. Simone Darses, vol. 2 (Paris: Flammarion, 1971), 220 (ill.), 221, no. 690.\n\nKatharine Kuh, “These Are A Few of My Favorite Things,” Chicago Tribune Magazine, April 23, 1972, 32.\n\nMike Samuels, M.D. and Nancy Samuels, Seeing with the Mind’s Eye: The History, Techniques and Uses of Visualization (New York: Random House, 1975), 76, pl. 2.\n\nJohn L. Word, “A Reexamination of Van Gogh’s Pictorial Space,” The Art Bulletin 58, no. 4 (December 1976): 593–604. \n\nGuy Hubbard and Mary J. Rouse, ART: Discovering and Creating (Westchester, IL: Benefic Press, 1977), 102 (ill.).\n\nPaolo Lecaldano, L’opera pittorica completa di Van Gogh, vol. 2 (Milan: Rizzoli Editore, 1977), 220 (ill.), 221, no. 690.\n\nJanice Feldstein and Maureen Smith, The Art Institute of Chicago: 100 Masterpieces (Chicago: Art Institute of Chicago; distributed by Rand McNally, 1978), 116–17 (color ill.), no. 69. \n\nRobert H. Pelfrey and Mary Hall-Pelfrey, Art and Mass Media (New York: Harper & Row, 1985), 126 pl. 18, 182–83 fig. 7.23), 184.\n\nPeter C. Sutton, A Guide to Dutch Art in America (Washington, D.C.: Netherlands-American Amity Trust; Grand Rapids: Eerdmans, 1986), 54 fig. 77.\n\nRichard R. Brettell, “The Bartletts and the ‘Grande Jatte’: Collecting Modern Painting in the 1920s,” Art Institute of Chicago Museum Studies 12, no. 2 (1986): 105, 111.\n\nRichard R. Brettell, “Van Gogh’s Bedroom at Arles: the Problem of Priority,” Art Institute of Chicago Museum Studies 12, 2 (1986): pp. 136–37 (ill.), 138–51.\n\nJames N. Wood and Katharine C. Lee, eds., Master Paintings in The Art Institute of Chicago (Chicago Art Institute of Chicago, 1988), 65 (ill.).\n\nWalter Feilchendeldt, Vincent van Gogh and Paul Cassirer, Berlin: the reception of Van Gogh in Germany from 1901 to 1914 (Zwolle: Van Gogh Museum, 1988), 98 (ill.).\n\nJan Hulsker, “Bedroom Problems,” Simiolus, 18, 4 (1988): 257–59 (ill.), 260–61.\n\nIngo F. Walther and Rainer Metzger, Vincent Van Gogh Sämtliche Gemälde (Cologne: Benedikt Taschen Verlag, 1989), 441, 442, 548, 549 (color ill.).\n\nGene A. Mittler, Art in Focus (New York: Glencoe Publishing Company, 1989), p. 319, fig. 17.6.\n\nRichard Thomson, “State of the Art Van Gogh,” Apollo 132, no. 341(July 1990): 41 fig. 14, 42. \n\n“Vincent van Gogh Retrospective Exhibition,” Van Gogh Bulletin 5, no. 1 (1990): 5 (color ill.), 6.\n\nJan Hulsker, The New Complete Van Gogh, Enlarged Edition of the Catalogue Raisonné of the Works of Vincent van Gogh (Aldershot, England; Burlington, VT: J.M. Meulenhoff; Philadelphia: John Benjamins Pub. Co., 1996), 404-09 no. 1771, 496n1771.\n\nMark Rosenthal, The Robert and Jane Meyerhoff Collection, 1945 to 1995, exh. cat. (Washington, D.C., National Gallery of Art, 1996), 123–29 fig. 11. \n\nSculpture Foundation, Solid Impressions: J. Seward Johnson, Jr. (Hamilton, NJ: The Sculpture Foundation, 2002), 26 (color ill.), 27–29.\n\nPetra ten-Doesschate Chu, "The Reality of Illusion, The Illusion of Reality," in Beyond the Frame: Impressionism Revisited: The Sculptures of J. Seward Johnson, Jr., exh. cat. (Boston: Bulfinch Press; Washington, D.C.: In association with the Corcoran Gallery of Art, 2003), 11 (color ill.), 12, 15–18.\n\nRichard R. Brettell, "A View from Portland: 110 Years of Modern French Art in Portland," in Paris to Portland: Impressionist and Post Impressionist Masters in Portland Collections, exh. cat. (Portland: Portland Art Museum, 2003), p. 33, fig. 3. \n\nKimberly A. Smith, Between Ruin and Renewal: Egon Schiele\'s Landscapes (New Haven: Yale University Press, 2004), 30 fig. 15, 31.\n\nKatharine Kuh, My Love Affair with Modern Art: Behind the Scenes with a Legendary Curator (New York: Arcade Publishing, 2006), 52–53 (ill.), 91–94.\n\nJill Lloyd, Vincent van Gogh and Expressionism, exh. cat. (Ostfildern: Hatje Cantz Verlag; Amsterdam: Van Gogh Museum, 2006), 115–16, 122 (color ill.), 123–24.\n\nTsukasa Kodera, Vincent Willem van Gogh (Tokyo: Shogakukan, 2006), 16 (color ill.).\n\nLeo Jansen, Hans Luijten, and Nienke Bakker, eds., Vincent van Gogh, The Letters: The Complete Illustrated and Annotated Edition, vol 5: Saint-Rémy-de-Provence - Auvers-sur-Oise, 1889–1890 (Amsterdam: Van Gogh Museum; The Hague: Huygens Institute; Brussels: Mercatorfonds, 2009), 79 fig. 2, 80–88.\n\nMarika Spring, Helen Howard, Jo Kirby, Joseph Padfield, David Peggie, Ashok Roy, and Anne Stephenson-Wright, Studying Old Master Paintings: Technology and Practice (London: Archetype Publications: In association with the National Gallery, 2011), 237–38 fig. 2, 239–43.\n\nWalter Feilchenfeldt, Vincent van Gogh: Die Gemälde 1886–1890 Händler, Sammler, Ausstellungen Die Frühen Provenienzen (Wädenswil, Switzerland: Nimbus, Kunst und Bücher, 2009), 118 (color ill.).\n\nWalter Feilchendeldt, Vincent van Gogh: The years in France, Complete paintings 1886-1890. Dealers, collectors, exhibitions, provenance (London: Philip Wilson, 2013), 120 (color ill.).\n\nWilliam Rathbone, Marcia Steele, H. Travers Newton, and Galina K. Olmsted, "The Bedroom," Van Gogh Repetitions, exh. cat. (The Phillips Collection/The Cleveland Museum of Art, 2013), pp. 82 (color ill.), 83–89, fig. 38.\n\nGloria Groom, ed., Van Gogh\'s Bedrooms, exh. cat. (New Haven and London: Art Institute of Chicago, Yale University Press, 2016), plate 26.\n\nJill Shaw, ed., Van Gogh in America, exh. cat. (Detroit: Detroit Institute of Arts; New Haven: Yale University Press, 2022), 82, 128, 130, 131 pl. 45, 148, 163, 165n3, 209-10, 218, 222, 228n80, 228 n139, 228n141, 238 cat. 53.',
    artwork_type_title: "Painting",
    artist_id: 40610,
    artist_title: "Vincent van Gogh",
    image_id: "25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e",
  },
  info: {
    license_text:
      "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
    license_links: [
      "https://creativecommons.org/publicdomain/zero/1.0/",
      "https://www.artic.edu/terms",
    ],
    version: "1.10",
  },
  config: {
    iiif_url: "https://www.artic.edu/iiif/2",
    website_url: "http://www.artic.edu",
  },
};

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://api.artic.edu/api/v1/artworks/undefined?fields=id,title,thumbnail,date_display,artist_display,artist_title,artist_id,place_of_origin,artwork_type_title,image_id,short_description,description,publication_history,catalogue_display,medium_display,dimensions",
          () => {
            return HttpResponse.json(MokedData);
          }
        ),
      ],
    },
  },
};
