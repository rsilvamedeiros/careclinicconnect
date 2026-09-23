# Arquitetura Frontend

## Stack sugerida

- Next.js;
- React;
- TypeScript;
- App Router;
- TanStack Query;
- React Hook Form;
- Zod;
- Storybook.

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

## Server Components

Usar quando trouxer benefício real.

Não forçar Server Components em fluxos altamente interativos.

## Performance

- code splitting;
- dynamic import;
- cache control;
- imagens otimizadas;
- bundle monitoring;
- virtualização em grandes listas.
