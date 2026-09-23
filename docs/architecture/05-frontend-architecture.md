# Arquitetura Frontend

> Ver [ADR 0002](adr/0002-frontend-stack-vite-vs-nextjs.md) — decisão de usar Vite + React ao invés de Next.js para o app administrativo (`apps/web`).

## Stack sugerida

- Vite;
- React;
- TypeScript;
- React Router;
- TanStack Query;
- React Hook Form;
- Zod;
- Radix UI (primitivos acessíveis, estilizados via design tokens próprios);
- Tailwind CSS;
- Motion;
- Phosphor Icons;
- Storybook;
- Vitest + React Testing Library.

## Separação

```text
src/
├── app/
├── features/
├── entities/
├── shared/
├── services/
└── providers/
```

## Feature-first

Exemplo:

```text
features/
  appointments/
    components/
    hooks/
    schemas/
    services/
    types/
```

## Estado

Prioridade:

1. server state -> TanStack Query;
2. estado local -> React;
3. formulário -> React Hook Form;
4. estado global apenas quando necessário.

## Regras

- evitar store global para dados de API;
- não duplicar server state;
- validar boundary de entrada;
- componentes não devem conter regras complexas de negócio.

## Renderização

SPA client-rendered (ver ADR 0002). Sem Server Components neste app.

## Performance

- code splitting por rota via `React.lazy`;
- dynamic import;
- cache control;
- imagens otimizadas;
- bundle monitoring;
- virtualização em grandes listas.
