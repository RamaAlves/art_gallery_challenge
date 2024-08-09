import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonTableAgents } from "../../../../app/components/ui/Skeletons/SkeletonTableAgents";

const meta = {
  title: "Skeletons/SkeletonTableAgents",
  component: SkeletonTableAgents,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonTableAgents>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 10,
  },
};
