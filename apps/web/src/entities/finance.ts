export type PaymentStatus = "pending" | "paid" | "overdue" | "refunded";

export interface Payment {
  id: string;
  patientId: string;
  description: string;
  amountCents: number;
  status: PaymentStatus;
  dueDate: string;
}
