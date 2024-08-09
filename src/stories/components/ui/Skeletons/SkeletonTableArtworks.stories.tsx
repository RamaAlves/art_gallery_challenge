import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonTableArtworks } from "../../../../app/components/ui/Skeletons/SkeletonTableArtworks";

const meta = {
  title: "Skeletons/SkeletonTableArtworks",
  component: SkeletonTableArtworks,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonTableArtworks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 10,
  },
};
