import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "../../../../app/components/ui/Banner/Banner";

const meta = {
  title: "ui/Banner",
  component: Banner,
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
