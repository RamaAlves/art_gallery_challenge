import type { Meta, StoryObj } from "@storybook/react";

import { AgentDetail } from "./AgentDetail";

const meta = {
  title: "screens/Agent/AgentDetail",
  component: AgentDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
