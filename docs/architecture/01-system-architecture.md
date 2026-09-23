# Arquitetura do Sistema

## Estratégia inicial

**Modular Monolith + Event-Driven boundaries**

Motivos:

- MVP mais rápido;
- menor custo operacional;
- menos complexidade distribuída;
- possibilidade de separar serviços posteriormente;
- domínio bem delimitado desde cedo.

## Stack sugerida

### Frontend
- Next.js;
- React;
- TypeScript;
- Design System;
- TanStack Query;
- React Hook Form;
- Zod;
- Storybook.

### Backend
Recomendação inicial: **NestJS + TypeScript**.

### Dados
- PostgreSQL;
- Redis;
- Object Storage;
- pgvector futuramente quando fizer sentido.

## Visão

```text
Web / Patient Portal
        |
      API
        |
+---------------------------+
| Identity / Tenancy        |
| Patient / Scheduling      |
| Clinical / Procedures     |
| CRM / Documents           |
| Communication / Finance   |
| Automation / Analytics    |
| AI / Integration Hub      |
+---------------------------+
        |
   Domain Events
        |
 Workers / Queues
        |
 PostgreSQL / Redis / Storage
```

## Assíncrono

Usar filas para:

- mensagens;
- documentos;
- relatórios;
- automações;
- webhooks;
- IA;
- sincronizações.

Possível início: BullMQ + Redis.

## Princípio

Não adotar microserviços apenas por modernidade.

Separar serviços quando houver necessidade comprovada de escala, isolamento, ownership ou disponibilidade.
