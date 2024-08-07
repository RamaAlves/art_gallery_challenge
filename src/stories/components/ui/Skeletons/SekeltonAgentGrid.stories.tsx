import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonAgentGrid } from "../../../../app/components/ui/Skeletons/SekeltonAgentGrid";

const meta = {
  title: "Skeletons/SkeletonAgentGrid",
  component: SkeletonAgentGrid,
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonAgentGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: 12,
  },
};
