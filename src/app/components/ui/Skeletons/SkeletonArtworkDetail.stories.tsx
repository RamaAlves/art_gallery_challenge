import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonArtworkDetail } from "./SkeletonArtworkDetail";

const meta = {
  title: "Skeletons/SkeletonArtworkDetail",
  component: SkeletonArtworkDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonArtworkDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
