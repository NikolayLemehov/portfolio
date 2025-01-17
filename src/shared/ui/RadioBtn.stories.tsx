import { Meta, StoryObj } from "@storybook/react";
import "./RadioBtn.module.css";
import { fn } from "@storybook/test";

import { ThemeMode } from "@/shared/types.ts";

import { RadioBtn } from "./RadioBtn.tsx";

const modes: ThemeMode[] = ["light", "dark", "system"];
const meta: Meta<typeof RadioBtn> = {
  title: "Components/RadioBtn",
  component: RadioBtn,
  parameters: { layout: "centered" },
  argTypes: {
    mode: {
      options: modes,
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
  // decorators: [
  //   (Story) => (
  //     <div className="flex gap-4">
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof RadioBtn>;

export const DarkPrimary: Story = {
  args: {
    mode: "dark",
    isActive: false,
    onClick: fn,
  },
};

export const LightPrimary: Story = {
  args: {
    mode: "light",
    isActive: true,
    onClick: fn,
  },
};
