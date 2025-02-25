import Input from "../components/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    value: "",
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    value: "Primary Input",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    value: "Secondary Input",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    size: "medium",
    value: "Accent Input",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    value: "Large Input",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    value: "Small Input",
  },
};
