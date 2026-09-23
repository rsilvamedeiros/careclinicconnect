import type { CurrentUser } from "@/entities/user";

const tenant = { id: "tenant-lumiere", name: "Lumière Clínica Estética" };

export const mockUsers: CurrentUser[] = [
  {
    id: "user-owner",
    name: "Camila Andrade",
    email: "camila@lumiereclinica.com.br",
    role: "OWNER",
    tenant,
  },
  {
    id: "user-manager",
    name: "Renato Farias",
    email: "renato@lumiereclinica.com.br",
    role: "MANAGER",
    tenant,
  },
  {
    id: "user-professional",
    name: "Dra. Beatriz Nogueira",
    email: "beatriz@lumiereclinica.com.br",
    role: "PROFESSIONAL",
    tenant,
  },
  {
    id: "user-receptionist",
    name: "Juliana Souza",
    email: "juliana@lumiereclinica.com.br",
    role: "RECEPTIONIST",
    tenant,
  },
];

export const defaultMockUser = mockUsers[0];
