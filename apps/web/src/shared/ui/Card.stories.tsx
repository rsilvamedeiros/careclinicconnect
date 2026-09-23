import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Shared/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Agenda de hoje</CardTitle>
        <CardDescription>6 atendimentos programados</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-ink-muted">Conteúdo do card renderizado aqui.</p>
      </CardContent>
    </Card>
  ),
};
