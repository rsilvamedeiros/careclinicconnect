import type { Meta, StoryObj } from "@storybook/react-vite";

import { mockDashboardMetrics } from "@/shared/mocks/mockDashboardMetrics";

import { MetricCard } from "./MetricCard";

const meta: Meta<typeof MetricCard> = {
  title: "Dashboard/MetricCard",
  component: MetricCard,
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Revenue: Story = { args: { metric: mockDashboardMetrics[0] } };
export const NegativeTrend: Story = { args: { metric: mockDashboardMetrics[3] } };
