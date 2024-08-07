import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonAgentDetail } from "./SkeletonAgentDetail";

const meta = {
  title: "Skeletons/SkeletonAgentDetail",
  component: SkeletonAgentDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonAgentDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
