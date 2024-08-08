import type { Meta, StoryObj } from "@storybook/react";

import { ErrorPage } from "../../app/screens/ErrorPage/ErrorPage";

const meta = {
  title: "screens/ErrorPage/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
