# ADR 0002 — Frontend stack: Vite + React (não Next.js)

## Status

Aceito.

## Data

2026-09-23

## Contexto

`05-frontend-architecture.md` prescrevia Next.js com App Router como stack de frontend. Ao iniciar o scaffold do `apps/web`, identificamos que o app administrativo do CareClinicConnect é uma SPA autenticada — agenda, prontuário, CRM, timeline de paciente — sem necessidade de SEO ou first-load para visitantes anônimos, e fortemente interativa. Esse perfil entra em atrito com o modelo de Server Components e streaming do App Router, que adiciona complexidade de build/runtime sem benefício correspondente para este contexto.

## Decisão

Adotar Vite + React 19 + TypeScript com React Router v7 (client-side) como base de `apps/web`, abandonando Next.js/App Router para este contexto. SSR será reavaliado separadamente para o futuro Patient Portal público (fora do escopo deste ADR), caso SEO ou first-load para visitantes anônimos se tornem requisito.

## Alternativas

- **Next.js App Router** — rejeitado: overhead de Server Components/streaming sem ganho para um app autenticado.
- **Next.js Pages Router** — ainda traz SSR e roteamento por arquivo desnecessários para este caso de uso.
- **Remix** — fora das decisões de stack já fechadas para o projeto (TanStack Query, React Hook Form, Zod).
- **Create React App** — descontinuado, sem manutenção ativa.

## Consequências

### Positivas

- HMR e dev server mais rápidos;
- build/deploy como artefato estático, sem runtime Node dedicado para servir o frontend;
- melhor integração com Storybook e Vitest (mesma base Vite);
- superfície de configuração menor.

### Negativas

- sem SSR/SEO — aceitável para um app autenticado, mas exige atenção se o Patient Portal público reaproveitar esta base;
- code-splitting por rota precisa ser explícito (`React.lazy` por rota), não é automático como no App Router;
- o futuro Patient Portal público exigirá seu próprio ADR de stack.

## Evolução

Reavaliar SSR/streaming especificamente para o Patient Portal público quando esse módulo entrar em desenvolvimento.
