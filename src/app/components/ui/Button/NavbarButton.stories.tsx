import type { Meta, StoryObj } from "@storybook/react";

import { NavbarButton } from "./NavbarButton";

const meta: Meta<typeof NavbarButton> = {
  title: "Nav/NavbarButton",
  component: NavbarButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavbarButton>;

export const InLocation: Story = {
  args: {
    page: {
      section: "Artworks",
      path: "/artworks",
    },
    locationPath: "/artworks",
  },
};
export const InOtherLocation: Story = {
  args: {
    page: {
      section: "Artworks",
      path: "/artworks",
    },
    locationPath: "/agents",
  },
};
