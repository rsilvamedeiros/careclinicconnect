import { differenceInYears, format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatCurrencyCents(amountCents: number): string {
  return currencyFormatter.format(amountCents / 100);
}

export function formatDate(isoDate: string, pattern = "dd/MM/yyyy"): string {
  return format(new Date(isoDate), pattern, { locale: ptBR });
}

export function formatDateTime(isoDate: string): string {
  return format(new Date(isoDate), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
}

export function formatTime(isoDate: string): string {
  return format(new Date(isoDate), "HH:mm", { locale: ptBR });
}

export function formatRelative(isoDate: string): string {
  return formatDistanceToNow(new Date(isoDate), { locale: ptBR, addSuffix: true });
}

export function formatAge(birthDateIso: string): number {
  return differenceInYears(new Date(), new Date(birthDateIso));
}
