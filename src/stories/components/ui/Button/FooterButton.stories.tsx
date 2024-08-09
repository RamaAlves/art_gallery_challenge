import type { Meta, StoryObj } from "@storybook/react";

import { FooterButton } from "../../../../app/components/ui/Button/FooterButton";

const meta = {
  title: "ui/FooterButton",
  component: FooterButton,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterButton>;

export default meta;

type Story = StoryObj<typeof meta>;

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
