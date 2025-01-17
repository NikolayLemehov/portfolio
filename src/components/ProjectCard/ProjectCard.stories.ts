import { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {
  args: {
    type: "box",
  },
};
