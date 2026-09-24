/** Smart Scheduling — lista de espera inteligente (docs/product/08-future-ideas.md) */
export interface WaitlistEntry {
  id: string;
  patientName: string;
  procedureName: string;
  preferredWindow: string;
  waitingSince: string;
}
