import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonPagination } from "../../../../app/components/ui/Skeletons/SkeletonPagination";

const meta = {
  title: "Skeletons/SkeletonPagination",
  component: SkeletonPagination,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
