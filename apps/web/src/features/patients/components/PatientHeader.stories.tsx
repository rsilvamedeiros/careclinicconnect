import type { Meta, StoryObj } from "@storybook/react-vite";

import { mockPatient } from "@/shared/mocks/mockPatients";

import { PatientHeader } from "./PatientHeader";

const meta: Meta<typeof PatientHeader> = {
  title: "Patients/PatientHeader",
  component: PatientHeader,
};

export default meta;
type Story = StoryObj<typeof PatientHeader>;

export const Default: Story = { args: { patient: mockPatient } };
export const WithoutAllergyAlert: Story = {
  args: { patient: { ...mockPatient, allergyAlert: undefined } },
};
