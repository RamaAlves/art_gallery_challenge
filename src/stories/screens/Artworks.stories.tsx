import type { Meta, StoryObj } from "@storybook/react";

import { Artworks } from "../../app/screens/Artwork/Artworks";

const meta = {
  title: "screens/Artwork/Artworks",
  component: Artworks,
  tags: ["autodocs"],
} satisfies Meta<typeof Artworks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
