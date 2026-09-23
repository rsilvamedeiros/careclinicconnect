import type { Meta, StoryObj } from "@storybook/react-vite";

import { Plus } from "@/shared/icons";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  args: { children: "Novo agendamento" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Cancelar agendamento" } };
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Plus size={18} /> Novo agendamento
      </>
    ),
  },
};
export const Disabled: Story = { args: { disabled: true } };
