import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonGallery } from "./SkeletonGallery";

const meta = {
  title: "Skeletons/SkeletonGallery",
  component: SkeletonGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InHome: Story = {
  args: {
    images: 4,
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
    images: 8,
    columns: 1,
    columnsMd: 4,
    gap: 6,
    gapMd: 16,
    height: 600,
    heightMd: 300,
  },
};
