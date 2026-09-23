import type { Meta, StoryObj } from "@storybook/react-vite";

import { mockPatientTimeline } from "@/shared/mocks/mockPatients";

import { TimelineItem } from "./TimelineItem";

const meta: Meta<typeof TimelineItem> = {
  title: "Patients/TimelineItem",
  component: TimelineItem,
  render: (args) => (
    <ul className="max-w-md">
      <TimelineItem {...args} />
    </ul>
  ),
};

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const Consulta: Story = { args: { event: mockPatientTimeline[0] } };
export const Pagamento: Story = {
  args: { event: mockPatientTimeline.find((event) => event.type === "pagamento")! },
};
