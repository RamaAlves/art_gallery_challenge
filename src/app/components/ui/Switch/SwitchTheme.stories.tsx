import type { Meta, StoryObj } from "@storybook/react";

import { SwitchTheme } from "./SwitchTheme";

const meta = {
  title: "SwitchTheme",
  component: SwitchTheme,
  tags: ["autodocs"],
} satisfies Meta<typeof SwitchTheme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
