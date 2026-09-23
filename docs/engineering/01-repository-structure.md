# Estrutura Sugerida do Repositório

```text
careclinicconnect/
├── apps/
│   ├── web/
│   ├── api/
│   ├── worker/
│   └── patient-portal/
├── packages/
│   ├── ui/
│   ├── config/
│   ├── types/
│   ├── contracts/
│   ├── auth/
│   └── observability/
├── docs/
├── infra/
├── scripts/
├── CLAUDE.md
└── README.md
```

## Stack possível

- pnpm;
- Turborepo;
- Next.js;
- NestJS;
- PostgreSQL;
- Prisma ou Drizzle;
- Redis;
- BullMQ;
- Docker.

## Ambientes

- local;
- development;
- staging;
- production.

## Regra

O ambiente de desenvolvimento deve ser reproduzível.
