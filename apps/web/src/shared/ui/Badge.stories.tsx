import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Shared/Badge",
  component: Badge,
  args: { children: "Confirmado" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { tone: "neutral" } };
export const Success: Story = { args: { tone: "success" } };
export const Warning: Story = { args: { tone: "warning", children: "Pendente" } };
export const Danger: Story = { args: { tone: "danger", children: "Não compareceu" } };
export const Gold: Story = { args: { tone: "gold", children: "VIP" } };
export const Accent: Story = { args: { tone: "accent", children: "Agendado" } };
