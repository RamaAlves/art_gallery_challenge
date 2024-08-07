import type { Meta, StoryObj } from "@storybook/react";

import { AgentsTable } from "../../../../app/components/ui/Table/AgentsTable";

const meta = {
  title: "ui/Table/AgentsTable",
  component: AgentsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    agents: [
      {
        id: 96937,
        title: "Neue Galerie New York",
        is_artist: false,
        birth_date: null,
        death_date: null,
        description: null,
      },
      {
        id: 30979,
        title: "Don A. DuBroff",
        is_artist: true,
        birth_date: 1951,
        death_date: null,
        description: null,
      },
      {
        id: 111965,
        title: "Displays Fine Art Services",
        is_artist: false,
        birth_date: null,
        death_date: null,
        description: null,
      },
      {
        id: 102191,
        title: "The Broad",
        is_artist: false,
        birth_date: null,
        death_date: null,
        description: null,
      },
      {
        id: 36138,
        title: "Ed Paschke",
        is_artist: true,
        birth_date: 1939,
        death_date: 2004,
        description: null,
      },
      {
        id: 42434,
        title: "Charles White",
        is_artist: true,
        birth_date: 1918,
        death_date: 1979,
        description:
          '<p>Adept in multiple artistic mediums, Charles White created bold, large-scale paintings and drawings that magnified the power of the black figure, communicating universal human themes while also focusing attention on the lives of African Americans and the struggle for equality. At a time when the art world increasingly favored abstraction, White developed a distinctive and labor-intensive approach to art making and remained committed to a representational style that explored social and political themes ranging from the ongoing fight for freedom and equality to the dignity and struggles of labor.</p><p>Born and educated in Chicago, White was one of the preeminent artists to emerge during the city’s Black Renaissance of the 1930s and 1940s. As a child, White sketched in the galleries of the Art Institute of Chicago and in grade school received an award to attend drawing classes at the museum. As a high school student he earned a scholarship to the School of the Art Institute of Chicago. White received other scholarships that were revoked because of his race, but this early support was critical in White’s path to becoming a professional artist, offering him exhibition opportunities, including the museum’s Twenty-First International Exhibition of Watercolors in 1942. </p><p><a href="/exhibitions/2663/charles-white-a-retrospective">A 2018 exhibition</a> at the Art Institute was the first major retrospective of White’s work in more than 35 years and showcased the talented and influential artist whose work continues to resonate amid today’s national dialogues about race, work, equality, and history.</p>',
      },
      {
        id: 114063,
        title: "Leigh Ledare",
        is_artist: true,
        birth_date: 1976,
        death_date: null,
        description: null,
      },
      {
        id: 43356,
        title: "A.J.S.",
        is_artist: true,
        birth_date: null,
        death_date: null,
        description: null,
      },
      {
        id: 31257,
        title: "Claude Lorrain",
        is_artist: true,
        birth_date: 1600,
        death_date: 1682,
        description: null,
      },
      {
        id: 36062,
        title: "Georgia O'Keeffe",
        is_artist: true,
        birth_date: 1887,
        death_date: 1986,
        description:
          '<p>One of the most influential American artists of the 20th century, Georgia O\'Keeffe promoted new ideas of abstraction and helped redefine modern art. Best known for her paintings of flowers and plants—enlarged beyond life-size and precisely painted with bold colors—and for her spare and dramatic images inspired by the landscape of the Southwest, O\'Keeffe also took inspiration in the aesthetic and architectural styles that she was exposed to during her time as a student at School of the Art Institute of Chicago.</p><p>Although she only spent one year at SAIC, leaving to recuperate from typhoid fever, she developed a loyalty to the institution, exhibiting <a href="https://www-2018.artic.edu/exhibitions/7588" target="_blank">her first retrospective at the museum in 1943</a>. After the death of her husband—photographer and art dealer Alfred Stieglitz—O’Keeffe donated his art collection, including his immense holdings of photography to the Art Institute.</p><p>While O’Keeffe incorporated elements from various modernist movements into her work, her style was entirely her own. Her ability to connect and infuse natural and abstracted forms with evocative visual and spiritual qualities contributed significantly to the innovations of American modernism.</p><p>O’Keeffe also differed from most other American pioneers of modernism in that she was trained entirely in the United States. Apart from her time in Chicago, O\'Keeffe lived in Virginia, Texas, and South Carolina before moving permanently to New Mexico, where she worked almost until her death at the age of 98.</p>',
      },
    ],
  },
};
