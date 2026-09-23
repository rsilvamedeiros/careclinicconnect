import type { Icon } from "@phosphor-icons/react";

import { EmptyState } from "@/shared/ui";

export function ComingSoonPage({ title, icon: IconComp }: { title: string; icon: Icon }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <EmptyState
        icon={<IconComp size={32} />}
        title={`${title} está em construção`}
        description="Este módulo ainda não faz parte do escopo deste scaffold inicial — a navegação já reflete a arquitetura de informação definida em docs/ux/02-information-architecture.md."
      />
    </div>
  );
}
