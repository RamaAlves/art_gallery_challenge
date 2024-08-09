import type { Meta, StoryObj } from "@storybook/react";

import { MainLayout } from "../../app/layout/MainLayout";

const meta = {
  title: "layout/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof MainLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
