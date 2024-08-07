import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "../../../app/components/Footer/Footer";

const meta = {
  title: "Nav/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
