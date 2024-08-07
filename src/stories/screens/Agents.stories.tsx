import type { Meta, StoryObj } from "@storybook/react";

import { Agents } from "../../app/screens/Agent/Agents";

const meta = {
  title: "Screens/Agent/Agents",
  component: Agents,
  tags: ["autodocs"],
} satisfies Meta<typeof Agents>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
