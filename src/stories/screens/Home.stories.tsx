import type { Meta, StoryObj } from "@storybook/react";

import { Home } from "../../app/screens/Home/Home";

const meta = {
  title: "screens/Home/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
