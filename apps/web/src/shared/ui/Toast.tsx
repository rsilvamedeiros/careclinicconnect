import * as ToastPrimitive from "@radix-ui/react-toast";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  tone?: "neutral" | "success" | "danger";
}

interface ToastContextValue {
  toast: (message: Omit<ToastMessage, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const toneStyles: Record<NonNullable<ToastMessage["tone"]>, string> = {
  neutral: "border-border bg-surface",
  success: "border-forest-300 bg-forest-50",
  danger: "border-danger-500/40 bg-danger-50",
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const toast = useCallback((message: Omit<ToastMessage, "id">) => {
    const id = crypto.randomUUID();
    setMessages((current) => [...current, { id, ...message }]);
  }, []);

  const removeMessage = useCallback((id: string) => {
    setMessages((current) => current.filter((message) => message.id !== id));
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {messages.map((message) => (
          <ToastPrimitive.Root
            key={message.id}
            duration={4000}
            onOpenChange={(open) => {
              if (!open) removeMessage(message.id);
            }}
            className={cn(
              "rounded-lg border p-4 shadow-md",
              toneStyles[message.tone ?? "neutral"],
            )}
          >
            <ToastPrimitive.Title className="text-sm font-semibold text-ink">
              {message.title}
            </ToastPrimitive.Title>
            {message.description && (
              <ToastPrimitive.Description className="mt-1 text-sm text-ink-muted">
                {message.description}
              </ToastPrimitive.Description>
            )}
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-6 right-6 z-50 flex w-96 max-w-[calc(100vw-3rem)] flex-col gap-2" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
